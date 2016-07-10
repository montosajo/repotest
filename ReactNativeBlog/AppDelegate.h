/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import <UIKit/UIKit.h>
#import "dbm.h"
@interface AppDelegate : UIResponder <UIApplicationDelegate>
@property (nonatomic, strong) DBManager *dbManager;
@property (nonatomic, strong) UIWindow *window;
@property (nonatomic, strong) NSArray *arrPeopleInfo;

@end

@interface MyManager : NSObject {
  NSString *someProperty;
  NSArray *somearr;
}

@property (nonatomic, retain) NSString *someProperty;
@property (nonatomic, retain) NSArray  *somearr;
+ (id)sharedManager;

@end