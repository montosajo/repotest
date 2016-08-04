//
//  MCFileWriterUtil.m
//  
//  ReactNativeBlog
//  This code triggers on/off the voice recognition from Polipetix
//  Also sets a User setting with the input
//  Also processes 2 commands Next and Back
//  Another class handles the display uiview reading the User setting
//  MyCustom View.m on a timer basis perform the actions from Voice and click
//  The actions come from JSX via 2 touch areas ,that  gotta be changed to buttons
//  Created by giorgio borgia on 5/2/16.
//  Copyright © 2016 Facebook. All rights reserved.
//
#import <OpenEars/OELanguageModelGenerator.h>
#import <OpenEars/OEAcousticModel.h>
#import <OpenEars/OEPocketsphinxController.h>
#import <OpenEars/OEEventsObserver.h>
#import <Foundation/Foundation.h>
#import <AudioToolbox/AudioToolbox.h>
#import "MCFileWriterUtil.h"
#import "dbm.h"
#import "AppDelegate.h"
@interface MCFileWriterUtil() <OEEventsObserverDelegate>

@property (strong, nonatomic) OEEventsObserver *openEarsEventsObserver;

@property (nonatomic, strong) DBManager *dbManager;



@end

@implementation MCFileWriterUtil


// Expose this module to the React Native bridge
RCT_EXPORT_MODULE()

// Persist data
RCT_EXPORT_METHOD(writeFile:(NSString *)fileName
                  withContents:(NSString *)contents
                  errorCallback:(RCTResponseSenderBlock)failureCallback
                  callback:(RCTResponseSenderBlock)successCallback) {
  
  //NSLog(@"%@ %@", NSStringFromClass([self class]), NSStringFromSelector(_cmd));
  //
  if ( [fileName  isEqual: @"Y"]){
  //
 
   
  self.openEarsEventsObserver = [[OEEventsObserver alloc] init];
  [self.openEarsEventsObserver setDelegate:self];
  OELanguageModelGenerator *lmGenerator = [[OELanguageModelGenerator alloc] init];
  
  NSArray *words = [NSArray arrayWithObjects:@"next", @"back", @"pause", @"root", nil];
  NSString *name = @"xvNameIWantForMyLanguageModelFiles";
  NSError *err = [lmGenerator generateLanguageModelFromArray:words withFilesNamed:name forAcousticModelAtPath:[OEAcousticModel pathToModel:@"AcousticModelEnglish"]]; // Change "AcousticModelEnglish" to "AcousticModelSpanish" to create a Spanish language model instead of an English one.
  
  NSString *lmPath = nil;
  NSString *dicPath = nil;
  
  if(err == nil) {
    
    lmPath = [lmGenerator pathToSuccessfullyGeneratedLanguageModelWithRequestedName:@"xvNameIWantForMyLanguageModelFiles"];
    dicPath = [lmGenerator pathToSuccessfullyGeneratedDictionaryWithRequestedName:@"xvNameIWantForMyLanguageModelFiles"];
    
  } else {
    //NSLog(@"Error: %@",[err localizedDescription]);
  }
  
  [[OEPocketsphinxController sharedInstance] setActive:TRUE error:nil];
  [[OEPocketsphinxController sharedInstance] startListeningWithLanguageModelAtPath:lmPath dictionaryAtPath:dicPath acousticModelAtPath:[OEAcousticModel pathToModel:@"AcousticModelEnglish"] languageModelIsJSGF:NO]; // Change "AcousticModelEnglish" to "AcousticModelSpanish" to perform Spanish recognition instead of English.
  
  }//if order N
  else if ( [fileName  isEqual: @"N"]){
    
    [[OEPocketsphinxController sharedInstance] setActive:FALSE  error:nil];
    [[OEPocketsphinxController sharedInstance] stopListening ];
    
    
  }
  else if ( [fileName  isEqual: @"V"]){
    
    /*NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
    [defaults setObject:@"next"  forKey:@"Hoch"];
    [defaults synchronize];*/
    
 
    /*
    MyManager *shManager =[MyManager sharedManager];
    
    int i;
    for (i = 0; i < [[shManager step] count]; i++) {
      id myArrayElement = [[shManager step] objectAtIndex:i];
      NSLog( myArrayElement[0] );
      NSLog(@"xxx");
    }
    for (i = 0; i < [[shManager timer] count]; i++) {
      id myArrayElement = [[shManager timer] objectAtIndex:i];
      NSLog(@"xxx");
    }
    for (i = 0; i < [[shManager image] count]; i++) {
      id myArrayElement = [[shManager image] objectAtIndex:i];
      NSLog(@"xxx");
    }

    */
  
  }
  else if ( [fileName  isEqual: @"Z"]){
    UIApplication *app = [UIApplication sharedApplication];
    NSArray *eventArray = [app scheduledLocalNotifications];
    for (int i=0; i<[eventArray count]; i++)
    {
      UILocalNotification* oneEvent = [eventArray objectAtIndex:i];
      NSDictionary *userInfoCurrent = oneEvent.userInfo;
      NSString *uid=[NSString stringWithFormat:@"%@",[userInfoCurrent valueForKey:@"uid"]];
      if ([uid isEqualToString:@"Z"] || 1==1 )
      {
        //Cancelling local notification
        [app cancelLocalNotification:oneEvent];
        //
        UILocalNotification* local = [[UILocalNotification alloc]init];
        if (local)
        {
          local.fireDate = [NSDate dateWithTimeIntervalSinceNow:0.5];
          local.alertBody = @"ZCcan";
          local.timeZone = [NSTimeZone defaultTimeZone];
          
          [[UIApplication sharedApplication] scheduleLocalNotification:local];
          // info only for comamnd action in jsx means VProcessor tells jsx :gotta next or gottaback
          
          
        }
        
        
        
        //
        
      }
    }
  
 }

  else if ( [fileName  isEqual: @"B"]){
    
    NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
    [defaults setObject:@"back"  forKey:@"Hoch"];
    [defaults synchronize];
    
  }
  
 
  else {}  //some error trap
  
 successCallback(@[@"Write method called" ]);
}

- (void) pocketsphinxDidStartListening {
  //NSLog(@"Pocketsphinx is now listening.");
}

- (void) pocketsphinxDidDetectSpeech {
  //NSLog(@"Pocketsphinx has detected speech.");
}
  - (void) pocketsphinxDidReceiveHypothesis:(NSString *)hypothesis recognitionScore:(NSString *)recognitionScore utteranceID:(NSString *)utteranceID {
    NSLog(@"The received hypothesis is %@ with a score of %@ and an ID of %@", hypothesis, recognitionScore, utteranceID);
    
    NSString *mask=@"";
    if ( [hypothesis  isEqual: @"next"] && recognitionScore.integerValue >-120000  ) {
      
      NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
      [defaults setObject:hypothesis   forKey:@"Hoch"];
      [defaults synchronize];
      mask = @"ZCnext";
    }
    
    else if ( [hypothesis  isEqual: @"back"] && recognitionScore.integerValue > -120000) {
      NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
      [defaults setObject:hypothesis   forKey:@"Hoch"];
      [defaults synchronize];
      mask =@"ZCback";
    }
    else {
      mask =@"ZCerr1"; //this is to be discarded
      //for the time being .... do nothing see below mo message to jx controller
    }
    if ([mask  isEqual: @"ZCnext"] || [mask  isEqual:@"ZCback"]) {
        UILocalNotification* local = [[UILocalNotification alloc]init];
        if (local)
        {
            local.fireDate = [NSDate dateWithTimeIntervalSinceNow:0.5];
            local.alertBody = mask;
            local.timeZone = [NSTimeZone defaultTimeZone];
      
            [[UIApplication sharedApplication] scheduleLocalNotification:local];
      // info only for comamnd action in jsx means VProcessor tells jsx :gotta next or gottaback
      
      
        }
      
      
    }
  //}


}

// Operational Timer Action received .
RCT_EXPORT_METHOD(readFile:(NSString *)fileName
                  errorCallback:(RCTResponseSenderBlock)failureCallback
                  callback:(RCTResponseSenderBlock)successCallback) {
  
  NSLog(@"%@ %@", NSStringFromClass([self class]), NSStringFromSelector(_cmd));
  UILocalNotification* local = [[UILocalNotification alloc]init];
  if (local)
  {
   NSNumberFormatter *numberFormatter = [[NSNumberFormatter alloc] init];
   numberFormatter.numberStyle = NSNumberFormatterDecimalStyle;
    
  float delta = [numberFormatter numberFromString:fileName].floatValue;
    float delta1 =delta -10.0;
    
  //double delta=40.0;
  local.fireDate = [NSDate dateWithTimeIntervalSinceNow:delta];
  local.alertBody = @"A Recipe Waiting Timer  ended !!!";
  local.timeZone = [NSTimeZone defaultTimeZone];
  local.applicationIconBadgeNumber= 999;
  [[UIApplication sharedApplication] scheduleLocalNotification:local];
    //double delta=40.0;
    local.fireDate = [NSDate dateWithTimeIntervalSinceNow:delta1];
    local.alertBody = @"A Recipe Waiting Timer GOTTA FINSH SOON  !!!";
    local.timeZone = [NSTimeZone defaultTimeZone];
    local.applicationIconBadgeNumber= 777;
    [[UIApplication sharedApplication] scheduleLocalNotification:local];

 // successCallback(@[@"Read method called"]);
}

}

@end