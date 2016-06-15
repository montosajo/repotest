//
//  Myg.m
//  ReactNativeBlog
//
//  Created by giorgio borgia on 5/2/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <MapKit/MapKit.h>
#import "Myg.h"

@implementation GoogleMapManager : NSObject 

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[MKMapView alloc] init];
}

@end
