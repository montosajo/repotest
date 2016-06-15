//
//  MyCustomViewManager.m
//  demo
//
//  Created by Thomas Parslow on 01/04/2015.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "MyCustomViewManager.h"
#import "MyCustomView.h"
#import <UIKit/UIKit.h>

@implementation MyCustomViewManager


RCT_EXPORT_MODULE();

RCT_EXPORT_VIEW_PROPERTY(isRed, BOOL)
- (UIView *)view
{
    MyCustomView * theView;
  //theView = [[MyCustomView alloc] initwithFrame:CGRectMake(100,100,10,10)];//
        //     initWithFrame:CGRectZero];
          //   Make(100,100,10,10)];
  //theView = [[MyCustomView alloc] init];;  //
  //CGRect fr = CGRectMake(0, 0, 20.0, 20.0);
  //theView = [[MyCustomView alloc ]initWithFrame:fr];
  
  CGRect  viewRect = CGRectMake(180, 180, 50,50);
  theView= [[MyCustomView alloc] initWithFrame:viewRect];
  //NSLog(@"xxxxxxxxxHss");
 
  
  
    return theView;
  
  
}
- (void) touchesBegan: (NSSet *) touches withEvent: (UIEvent *) event {
//UITouch *touch = [touches anyObject];
  
  
}
@end
