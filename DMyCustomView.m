//
//  MyCustomView.m
//  demo
//
//  Created by Thomas Parslow on 01/04/2015.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "MyCustomView.h"
#import <OpenEars/OELanguageModelGenerator.h>
#import <OpenEars/OEAcousticModel.h>
#import <OpenEars/OEPocketsphinxController.h>
#import <OpenEars/OEEventsObserver.h>
#import "RCTAsyncLocalStorage.h"
#import "UIresa.h"
Boolean hou= false ;
@interface MyCustomView ()

@property NSString *base; ;
@property NSString *base1;
@property UIImageView *imageView;
@property int count;
@property NSArray *myColors;
@property UIButton *tonbo;


@end





@implementation MyCustomView


{
  UIColor *squareColor;
  
  }

- (void)setIsRed:(BOOL)isRed
{
    _myColors = [NSArray arrayWithObjects:       @"mas.jpg",
    @"738.jpg",   @"744.jpg",   @"747.jpg",   @"746.jpg",   @"756.jpg",   @"759.jpg",
    @"762.jpg",   @"765.jpg",   @"768.jpg",   @"800.jpg",   @"775.jpg",
    @"778.jpg",   @"784.jpg",   @"788.jpg",   @"791.jpg",
                                         @"791.jpg",   @"791.jpg",   @"791.jpg",   @"791.jpg",   @"791.jpg",   @"791.jpg", nil ];
  
 
  if (isRed ==false){
    _count =1 ;
         squareColor= (isRed)  ? [UIColor redColor] : [UIColor greenColor];
         _base =@"notredraw";
    NSLog(@"GetParm First entry");
  
    [self setNeedsLayout];
}
      else {
    
    squareColor= (isRed)  ? [UIColor redColor] : [UIColor blueColor];
         NSLog(@"GetParm<<<<<<ddd<<<entry with nil ");;
    
      }
  
}
- (void)drawRect:(CGRect)rect
{
  [squareColor setFill];
  [NSTimer scheduledTimerWithTimeInterval:0.5
                                   target:self
                                 selector:@selector(targetMethod)
                                 userInfo:nil
                                  repeats:YES];
  UIImage* image1 = [UIImage imageNamed:@"759.jpg"];
  image1 = [UIImage imageNamed:[_myColors objectAtIndex: _count]] ;
  UIImage *scaledImage = [image1 scaleToSize:CGSizeMake(300.0f, 221.0f)];
  _imageView = [[UIImageView alloc] initWithImage: scaledImage];
  
  [_imageView setImage:scaledImage];
  
  NSLog([_myColors objectAtIndex: _count]);
  UIWindow* window = [UIApplication sharedApplication].keyWindow;
  NSLog(@"%f",window.frame.size.width);
  float wida =window.frame.size.width -300;
  wida= wida/2.0;
  
  NSLog(@"%f",wida);
  _imageView.frame = CGRectMake(wida,70,300,221); // position it to the middle

    [self addSubview:_imageView];
  ;
  float basex =window.frame.size.width * .06;
  float larga= window.frame.size.width * .25;
   UILabel *yourLabel = [[UILabel alloc] init];
  
  [yourLabel setTextColor:[UIColor blackColor]];
  [yourLabel setBackgroundColor:[UIColor clearColor]];
  [yourLabel setFont:[UIFont fontWithName: @"Trebuchet MS" size: 12.0f]];
  [yourLabel setNumberOfLines:10];
  [self  addSubview:yourLabel];
  basex =window.frame.size.width * .06;
  larga =window.frame.size.width * .88;
 [yourLabel setUserInteractionEnabled: YES];
  yourLabel.frame=CGRectMake(basex,380,larga,60.0);
  yourLabel.text =@"Asiago is an Italian cow's milk cheese that can assume different textures, according to its aging, from smooth for the fresh Asiago to a crumbly texture for the aged cheese";

}




- (void) targetMethod {
  NSLog(@"Button Button Button .");
  
  
  
  NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
  NSString *moveme = [defaults stringForKey:@"HighScore"];
    [self setNeedsDisplay];
  
  
}

@end
