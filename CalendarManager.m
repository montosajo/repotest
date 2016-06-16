//
//  CalendarManager.m
//  ReactNativeBlog
//
//  Created by giorgio borgia on 4/28/16.
//  Copyright © 2016 Facebook. All rights reserved.
//
// CalendarManager.m
#import "CalendarManager.h"
#import "RCTConvert.h"
@implementation CalendarManager
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(NSString *)ISO8601DateString)
{
  NSDate *date = [RCTConvert NSDate:ISO8601DateString];
  //NSLog(@"Ich bin in Obj C mit unsere gruese \n" );
  if([UIApplication instancesRespondToSelector:@selector(registerUserNotificationSettings:)]) {
    
    [[UIApplication sharedApplication] registerForRemoteNotifications];
    UIUserNotificationSettings *settings = [UIUserNotificationSettings settingsForTypes:(UIUserNotificationTypeBadge | UIUserNotificationTypeSound | UIUserNotificationTypeAlert) categories:nil];
    [[UIApplication sharedApplication] registerUserNotificationSettings:settings];
    
  } else {
    [[UIApplication sharedApplication] registerForRemoteNotificationTypes:UIRemoteNotificationTypeSound | UIRemoteNotificationTypeAlert | UIRemoteNotificationTypeBadge];
  }
  if ([[UIApplication sharedApplication] respondsToSelector:@selector(currentUserNotificationSettings)]){ // Check it's iOS 8 and above
    
    UIUserNotificationSettings *grantedSettings = [[UIApplication sharedApplication] currentUserNotificationSettings];
    
    if (grantedSettings.types == UIUserNotificationTypeNone) {
      //NSLog(@"No permission granted");
     /* [[UIApplication sharedApplication] registerForRemoteNotifications];
      UIUserNotificationSettings *settings = [UIUserNotificationSettings settingsForTypes:(UIUserNotificationTypeBadge | UIUserNotificationTypeSound | UIUserNotificationTypeAlert) categories:nil];
      [[UIApplication sharedApplication] registerUserNotificationSettings:settings];*/
      

    }
    else if (grantedSettings.types & UIUserNotificationTypeSound & UIUserNotificationTypeAlert ){
      //NSLog(@"Sound and alert permissions ");
    }
    else if (grantedSettings.types  & UIUserNotificationTypeAlert){
      //NSLog(@"Alert Permission Granted");
    }
  }
  
  /*UILocalNotification *localNotif = [[UILocalNotification alloc] init];
  if (localNotif == nil) return;
  NSDate *fireTime = [[NSDate date] addTimeInterval:22]; // adds 10 secs
  localNotif.fireDate = fireTime;
  localNotif.alertBody = @"Alert!";
  //[[UIApplication sharedApplication] scheduleLocalNotification:localNotif];
   //NSLog(@"Ich bin in Obj C zuruck  \n" );
  //[localNotif release];
  */
}



@end

