//
//  MCFileWriterUtil.m
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



@interface MCFileWriterUtil() <OEEventsObserverDelegate>

@property (strong, nonatomic) OEEventsObserver *openEarsEventsObserver;


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
  
  //start
  
  
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
  // NSString *path = [[NSBundle mainBundle] pathForResource: @"Hoja6" ofType: @"JPG"];
  // NSLog(@"path: %@", path);
  [[OEPocketsphinxController sharedInstance] setActive:TRUE error:nil];
  [[OEPocketsphinxController sharedInstance] startListeningWithLanguageModelAtPath:lmPath dictionaryAtPath:dicPath acousticModelAtPath:[OEAcousticModel pathToModel:@"AcousticModelEnglish"] languageModelIsJSGF:NO]; // Change "AcousticModelEnglish" to "AcousticModelSpanish" to perform Spanish recognition instead of English.
  
  }//if order Y
  else if ( [fileName  isEqual: @"N"]){
    
    [[OEPocketsphinxController sharedInstance] setActive:FALSE  error:nil];
    [[OEPocketsphinxController sharedInstance] stopListening ];
    
    
  }
  else if ( [fileName  isEqual: @"V"]){
    
    NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
    [defaults setObject:@"next"  forKey:@"Hoch"];
    [defaults synchronize];
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
    
    
    if ( [hypothesis  isEqual: @"next"] && recognitionScore.integerValue > -150000 ) {
     
      NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
      [defaults setObject:hypothesis   forKey:@"Hoch"];
      [defaults synchronize];
     
    }
    
    else if ( [hypothesis  isEqual: @"back"] && recognitionScore.integerValue > -150000) {
      NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
      [defaults setObject:hypothesis   forKey:@"Hoch"];
      [defaults synchronize];
    }
    else {
      
      //for the time being do nothing
    }
 
  
}

// Load data from disk and return the String.
RCT_EXPORT_METHOD(readFile:(NSString *)fileName
                  errorCallback:(RCTResponseSenderBlock)failureCallback
                  callback:(RCTResponseSenderBlock)successCallback) {
  
  NSLog(@"%@ %@", NSStringFromClass([self class]), NSStringFromSelector(_cmd));
  //for teh time being not used
 // successCallback(@[@"Read method called"]);
}



@end