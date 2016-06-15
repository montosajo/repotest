//
//  mastert.m
//  ReactNativeBlog
//
//  Created by giorgio borgia on 4/27/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "mastert.h"

@implementation NSTimerExampleViewController

-(void)timerFired:(NSTimer *) theTimer
{
  NSLog(@"timerFired @ %@", [theTimer fireDate]);
}
@end
