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
@property (nonatomic, retain) NSArray  *arr1;
@end

@interface MyManager : NSObject {
   NSString *someProperty;
   NSArray *recipe;
   NSArray *arr1;
   NSArray *step;
   NSArray *image;
   NSArray *timer;
}

@property (nonatomic, retain) NSString *someProperty;
@property (nonatomic, retain) NSArray  *arr1;
@property (nonatomic, retain) NSArray  *recipe;
@property (nonatomic, retain) NSArray  *step;
@property (nonatomic, retain) NSArray  *image;
@property (nonatomic, retain) NSArray  *timer;
+ (id)sharedManager;

@end