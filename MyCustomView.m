//
//  MyCustomView.m
//  This code displays images  and texts on a sequence
// decoding orders from buttons see MFCWriterUtil.m
//
//  Based on the idea of  Thomas Parslow on 01/04/2015.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "MyCustomView.h"
/*#import <OpenEars/OELanguageModelGenerator.h>
#import <OpenEars/OEAcousticModel.h>
#import <OpenEars/OEPocketsphinxController.h>
#import <OpenEars/OEEventsObserver.h>*/
#import "RCTAsyncLocalStorage.h"
#import "UIresa.h"
#import <AudioToolbox/AudioToolbox.h>
#import <AVFoundation/AVFoundation.h>
Boolean hou= false ;
@interface MyCustomView ()
//<OEEventsObserverDelegate>
//@property (strong, nonatomic) OEEventsObserver *openEarsEventsObserver;
@property NSString *base; ;
@property NSString *base1;
@property UIImageView *imageView;
@property UIImageView *imageView1;
@property int count;
@property NSArray *myColors;
@property NSArray *mySound;
@property UIButton *tonbo;
@property NSArray *mockedData;
@property NSString *texta;
@property UILabel *yourLabel;
@property BOOL *halt ;
@end

@implementation MyCustomView


{
  UIColor *squareColor;
  //used just as a  flag
  AVAudioPlayer *_audioPlayer1;
  }

- (void)setIsRed:(BOOL)isRed
{
    _mySound = [NSArray arrayWithObjects:
            
              @"%@/drum01.mp3",
           @"%@/3227-738.mp3",
           @"%@/3227-744.mp3",
           @"%@/3227-747.mp3",
           @"%@/3227-752.mp3",
           @"%@/3227-756.mp3",
           @"%@/3227-759.mp3",
           @"%@/3227-762.mp3",
           @"%@/3227-765.mp3",
           @"%@/3227-768.mp3",
           @"%@/3227-800.mp3",
           @"%@/3227-775.mp3",
           @"%@/3227-778.mp3",
           @"%@/3227-781.mp3",
           @"%@/3227-784.mp3",
           @"%@/3227-788.mp3",
           @"%@/3227-791.mp3",
           @"%@/3227-794.mp3",
           @"%@/3227-1260.mp3",
           @"%@/3227-1277.mp3",
           @"%@/3227-1257.mp3",
           @"%@/3227-1280.mp3",
           @"%@/3227-797.mp3",
           nil];
   _myColors = [NSArray arrayWithObjects:       @"mas.jpg",
    @"738.jpg",   @"744.jpg",   @"747.jpg",   @"746.jpg",   @"756.jpg",   @"759.jpg",
    @"762.jpg",   @"765.jpg",   @"768.jpg",   @"800.jpg",   @"775.jpg",
    @"778.jpg",   @"784.jpg",   @"788.jpg",   @"791.jpg",
                                         @"791.jpg",   @"791.jpg",   @"791.jpg",   @"791.jpg",   @"791.jpg",   @"791.jpg", @"797.jpg",nil ];
    _mockedData = [NSArray arrayWithObjects:
                   @"Introduction",
                    @"Assemble and measure ingredients",
                    
                    @"Mix dry ingredients",
                    
                    @"Crack eggs into mixing bowl",
                    
                    @"Beat  eggs.",
                    
                    
                    @"Add oil and vanilla to egg",
                    
                    @"Mix wet ingredients with dry",
                    
                    @"Mix batter with large spoon or  spatula.  It will take some effort",
                    
                    @"Add raisins and nuts to batter",
                    
                    
                    @"Stir until thoroughly mixed",
                    
                    @"Grease cookie pan",
                    
                    @"Use tablespoon to scoop batter for cookies.  Have a second spoon to push batter onto cookie sheets.  Leave about an inch on either side of the cookies.  They do not spread very much.  You can put 12 to 16 cookies on a standard plate",
                    
                    
                    @"Put first cookie sheet into oven --Launching 3 mins timer ** Blocking Next ZC",
                    
                    @"Move first batch up and add second batch below",
                    
                    @"Remove first batch from oven, move second batch higher and add third batch on bottom shelf of oven Launching 3 mins timer **",
                    
                    
                    @"Move cookies to cooling rack or plate",
                    
                    
                    @"Remove second batch.  Move the bottom sheet to top.  If there is a fourth sheet, put the new one on the bottom Launching 3 mins timer **  ",
                    
                    
                    @"Move second batch from cookie sheet to plate or cooling rack",
                    
                    
                    @"Remove third batch and raise fourth batch to top Launching 3 mins timer ** Blocking Next ",
                    
                    
                    @"Move third batch to plate Launching 3 mins timer ** Blocking next ",
                    
                    
                    @"Remove last batch from oven",
                    
                    
                    @"Move fourth batch to plate",
                    
                    @"Serve !!!! ",
                    
                   nil  ];
  
 
 
  if (isRed ==false){
    _count =1 ;
         squareColor= (isRed)  ? [UIColor redColor] : [UIColor greenColor];
         _base =@"notredraw";
   
    
   
    //NSLog(@"GetParm First entry");
   
    [self setNeedsLayout];
  }
   else {
    
    squareColor= (isRed)  ? [UIColor redColor] : [UIColor blueColor];
         //NSLog(@"GetParm<<<<<<ddd<<<entry with nil ");; ///////

   }
  
  
}
- (void)drawRect:(CGRect)rect
{
  
  // NSLog(@"Original: %s (length %lu)", "sounds", (unsigned long)_mySound.count);
  //NSLog(@"Original: %s (length %lu)", "imas", (unsigned long)_myColors.count);
  //NSLog(@"Original: %s (length %lu)", "texts", (unsigned long)_mockedData.count);
  [squareColor setFill];
  [NSTimer scheduledTimerWithTimeInterval:5.0
                                   target:self
                                  selector:@selector(targetMethod)
                                  userInfo:nil
                                  repeats:YES];
  
  UIImage* image1 = [UIImage imageNamed:@"759.jpg"];
  //initial image
  image1 = [UIImage imageNamed:[_myColors objectAtIndex: _count]] ;
  //UIImage *scaledImage = [image1 scaleToSize:CGSizeMake(300.0f, 221.0f)];
  UIImage *scaledImage = [image1 scaleToSize:CGSizeMake(150.0f, 110.0f)];
  _imageView = [[UIImageView alloc] initWithImage: scaledImage];
  
  [_imageView setImage:scaledImage];
  
  //NSLog([_myColors objectAtIndex: _count]);
  UIWindow* window = [UIApplication sharedApplication].keyWindow;
  //NSLog(@"%f",window.frame.size.width);
  float wida =window.frame.size.width -300;
  wida= wida/2.0;
  
  //NSLog(@"%f",wida);
 // _imageView.frame = CGRectMake(wida,70,300,221); // position it to the middle
   _imageView.frame = CGRectMake(wida,40,150,110);
  [self addSubview:_imageView];
  
  float basex =window.frame.size.width * .06;
  float larga= window.frame.size.width * .25;
 
   _texta = [_mockedData objectAtIndex: _count] ;
  [_yourLabel removeFromSuperview];
  _yourLabel = [[UILabel alloc] init] ;
  [_yourLabel setText:_texta];
  [_yourLabel setTextColor:[UIColor blackColor]];
  [_yourLabel setBackgroundColor:[UIColor clearColor]];
  [_yourLabel setFont:[UIFont fontWithName: @"Trebuchet MS" size: 12.0f]];
  [_yourLabel setNumberOfLines:10];
 
  basex =window.frame.size.width * .06;
  larga =window.frame.size.width * .88;
  [_yourLabel setUserInteractionEnabled: YES];
  _yourLabel.frame=CGRectMake(basex,360,larga,60.0);
  //  yourLabel.text =@"Asiago is an Italian cow's milk cheese that can assume different textures, according to its aging, from smooth for the fresh Asiago to a crumbly texture for the aged cheese";
  
   [self  addSubview:_yourLabel];
  //initial text used as place holder
  _texta = [_mySound objectAtIndex: _count] ;
  //NSString *path = [NSString stringWithFormat:@"%@/drum01.mp3", [[NSBundle mainBundle] resourcePath]];
  NSString *path = [NSString stringWithFormat:_texta, [[NSBundle mainBundle] resourcePath]];

    NSURL *soundUrl = [NSURL fileURLWithPath:path];
  AVURLAsset* audioAsset = [AVURLAsset URLAssetWithURL:soundUrl options:nil];
  CMTime audioDuration = audioAsset.duration;
  float audioDurationSeconds = CMTimeGetSeconds(audioDuration);
  //NSLog(@"Original: %@ (length %f)", path, audioDurationSeconds);

  // Create audio player object and initialize with URL to sound
  _audioPlayer1 = [[AVAudioPlayer alloc] initWithContentsOfURL:soundUrl error:nil];
  _audioPlayer1.numberOfLoops=0;
  [_audioPlayer1 play];
  _halt =YES;
 

  [NSTimer scheduledTimerWithTimeInterval:audioDurationSeconds
                                   target:self
                                 selector:@selector(cleanMethod)
                                 userInfo:nil
                                  repeats:YES];
  if (_count == 3 ){
    NSDate *currentDate = [NSDate date];
    NSDate *dateP = [currentDate dateByAddingTimeInterval:60];
  UILocalNotification *localNotification = [[UILocalNotification alloc] init];
  localNotification.fireDate = dateP;
  localNotification.alertBody = [NSString stringWithFormat:@"Alert Fired at %@", dateP];
  localNotification.soundName = UILocalNotificationDefaultSoundName;
  localNotification.applicationIconBadgeNumber = _count;
  [[UIApplication sharedApplication] scheduleLocalNotification:localNotification];
  }
  }

- (void) targetMethod  {
  // make the move
  NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
  NSString *ordo = [defaults stringForKey:@"Hoch"];
  if ([ordo  isEqual: @"next"]&& _halt ==NO){
    _count =_count + 1;
    [defaults setObject:@""   forKey:@"Hoch"];
    [defaults synchronize];
    if ( _count > _mockedData.count -1 ) {
      _count =1;
    }
    [self setNeedsDisplay];
  }
  else if ([ordo  isEqual: @"back"] && _halt ==NO){
     _count =_count - 1;
    if ( _count == 0 ) {
      _count =1;
    }
    [defaults setObject:@""   forKey:@"Hoch"];
    [defaults synchronize];
    [self setNeedsDisplay];
  }
  else {
    [defaults setObject:@""   forKey:@"Hoch"];
    [defaults synchronize];
    // do nothing  :)  empty hands for timer or device in pulpito
  }
  
  //NSLog(@"Original: %@ (length %d)", ordo, [ordo length]);
  
  
}
- (void) cleanMethod  {
  // make the move
 
  [self setHalt:NO];
}
@end
