//
//  FirstViewController.m
//  baka
//
//  Created by giorgio borgia on 8/28/13.
//  Copyright (c) 2013 giorgio borgia. All rights reserved.
//
//

//
#import "FirstViewController.h"

#import "AppDelegate.h"
#import "KASlideShow.h"
#import <AVFoundation/AVFoundation.h>
//#import <OpenEars/LanguageModelGenerator.h>
//in your app and add the following line right underneath it:
#import <RejectoDemo/LanguageModelGenerator+Rejecto.h>

//#import <OpenEars/LanguageModelGenerator.h>
#import <OpenEars/OpenEarsLogging.h>
#import <OpenEars/OpenEarsEventsObserver.h>



@implementation FirstViewController
int maraca =0 ;

AppDelegate *appDelegate;


@synthesize pocketsphinxController;
@synthesize openEarsEventsObserver;


- (OpenEarsEventsObserver *)openEarsEventsObserver {
    if (openEarsEventsObserver == nil) {
        openEarsEventsObserver = [[OpenEarsEventsObserver alloc] init];
    }
    return openEarsEventsObserver;
}

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        self.title = NSLocalizedString(@"COOK", @"First");
        self.tabBarItem.image = [UIImage imageNamed:@"star.png"];
        //UITabBarItem *tab1 = [[UITabBarItem alloc] initWithTitle:@"Artists" image:[UIImage imageNamed:@"artist-tab.png"] tag:1];
        
    }
    locno = [NSArray arrayWithObjects:@"", nil];
    self.fliteDbLabel.text =@"xxxxxxxxxx";
        audio = [NSArray arrayWithObjects:
            
             @"3227-738",
             @"3227-744",
             @"3227-747",
             @"3227-752",
             @"3227-756",
             @"3227-759",
             @"3227-762",
            @"3227-765",
            @"3227-768",
            @"3227-800",
            @"3227-775",
            @"3227-778",
            @"3227-781",
            @"3227-784",
            @"3227-788",
            @"3227-791",
             @"3227-794",
            @"3227-1260",
            @"3227-1277",
            @"3227-1257",
            @"3227-1280",
            @"3227-797",
            nil];
chota = [NSArray arrayWithObjects:
                                                     // All capital letters.
                                                     @"mas.jpg",
                                                     @"738.jpg",@"744.jpg",@"746.jpg",@"747.jpg",@"756.jpg",@"759.jpg",
                                                     @"762.jpg",@"765.jpg",@"768.jpg",@"800.jpg",@"775.jpg",
 @"778.jpg",@"784.jpg",@"788.jpg",@"791.jpg",@"791.jpg",@"791.jpg",@"791.jpg",@"791.jpg",@"791.jpg",@"791.jpg,797.jpg",
                                                     nil];
    
    

    names = [NSArray arrayWithObjects:
            
            
             
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
            @"Use tablespoon to scoop batter for cookies.  Have a second spoon to push batter onto cookie sheets.  Leave about an inch on either side of the cookies.  They do not spread very much.  You can put 12 to 16 cookies on a standard pan, up to 20 on a large one",
             
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
              nil];
    
    //swai.hidden=TRUE;
   // [swai setEnabled:NO];
    return self;
}
							
- (void)viewDidLoad
{
    [super viewDidLoad];
    UIImage *backgroundImage = [UIImage imageNamed:@"cook.jpg"];
    
    UIImageView *backgroundImageView=[[UIImageView alloc]initWithFrame:self.view.frame];
   
    backgroundImageView.image=backgroundImage;
    backgroundImageView.alpha =0.2;
        
        [self.view insertSubview:backgroundImageView atIndex:0];
    
    myGlobalFlag=YES;
[OpenEarsLogging startOpenEarsLogging];
     appDelegate = [[UIApplication sharedApplication] delegate];
    _slideshow.delegate = self;
    //plabel.text=  @"TOM";
    //[ViewController. suspendRecognition];
    [_slideshow setDelay:5]; // Delay between transitions
    [_slideshow setTransitionDuration:1]; // Transition duration
    [_slideshow addImagesFromResources:@[@"mas.jpg",
    @"738.jpg",@"744.jpg",@"747.jpg",@"746.jpg",@"756.jpg",@"759.jpg",
    @"762.jpg",@"765.jpg",@"768.jpg",@"800.jpg",@"775.jpg",
    @"778.jpg",@"784.jpg",@"788.jpg",@"791.jpg",
    @"791.jpg",@"791.jpg",@"791.jpg",@"791.jpg",@"791.jpg",@"791.jpg",@"797.jpg"]]; // Add
    NSLog(@"generating ...");
         //  [self.openEarsEventsObserver setDelegate:self.openEarsEventsObserver];
      	
	NSArray *languageArray = [[NSArray alloc] initWithArray:[NSArray arrayWithObjects: // All capital letters.
                                                                                                     
                                                             //@"PROXIMO",
                                                             //@"ATRAS",
                                                             //@"STOP",
                                                             //@"START",
                                                             //@"STOP",
                                                             //@"TOM",
                                                             @"NEXT",
                                                             @"BACK",
                                                             @"RESTART",
                                                             @"RESET",
                                                             @"REPEAT",
                                                             nil]];
    NSArray *nada =[[NSArray alloc] initWithArray:[NSArray arrayWithObjects: // All capital letters.
                                                   
                                                   nil]];

	LanguageModelGenerator *languageModelGenerator = [[LanguageModelGenerator alloc] init];
   
    NSError *error = [languageModelGenerator generateRejectingLanguageModelFromArray:languageArray
                                                         withFilesNamed:@"OpenEarsDynamicGrammar"
                                                 withOptionalExclusions:nada
                                                        usingVowelsOnly:FALSE
                                                             withWeight:nil
                                                 forAcousticModelAtPath:[AcousticModel pathToModel:@"AcousticModelEnglish"]]; // Change "AcousticModelEnglish" to "AcousticModelSpanish" to create a Spanish Rejecto model.

	NSDictionary *dynamicLanguageGenerationResultsDictionary = nil;
	if([error code] != noErr) {
		NSLog(@"Dynamic language generator reported error %@", [error description]);
	} else {
		dynamicLanguageGenerationResultsDictionary = [error userInfo];
		
		
		NSString *lmFile = [dynamicLanguageGenerationResultsDictionary objectForKey:@"LMFile"];
		NSString *dictionaryFile = [dynamicLanguageGenerationResultsDictionary objectForKey:@"DictionaryFile"];
		NSString *lmPath = [dynamicLanguageGenerationResultsDictionary objectForKey:@"LMPath"];
		NSString *dicPath = [dynamicLanguageGenerationResultsDictionary objectForKey:@"DictionaryPath"];
		
		NSLog(@"Dynamic language generator completed successfully, you can find your new files %@\n and \n%@\n at the paths \n%@ \nand \n%@", lmFile,dictionaryFile,lmPath,dicPath);
        if (openEarsEventsObserver == nil) {
            openEarsEventsObserver = [[OpenEarsEventsObserver alloc] init];
        }
       [self.openEarsEventsObserver setDelegate:self];
        [self.pocketsphinxController startListeningWithLanguageModelAtPath:lmPath dictionaryAtPath:dicPath acousticModelAtPath:[AcousticModel pathToModel:@"AcousticModelEnglish"] languageModelIsJSGF:NO]; //
      pocketsphinxController.secondsOfSilenceToDetect=0.2;
        NSLog(@"Dynamic langua");
        NSString *deviceModel = (NSString*)[UIDevice currentDevice].model;
        UILabel *Label;
        [_slideshow neu];
        
        
        if ([[deviceModel substringWithRange:NSMakeRange(0, 4)] isEqualToString:@"iPad"]) {
            NSLog(@"iPad");
            Label = [[UILabel alloc] initWithFrame:CGRectMake(50, 550, 700, 120)];
            labelan.font=[UIFont fontWithName:@"AmericanTypewriter-Bold" size:18.0];
        } else {
            NSLog(@"iPhone or iPod Touch");
            Label = [[UILabel alloc] initWithFrame:CGRectMake(20, 190, 280, 110)];
             labelan.font=[UIFont fontWithName:@"AmericanTypewriter-Bold" size:11.0];
        }
        //UILabel *Label = [[UILabel alloc] initWithFrame:CGRectMake(0, 240, 320, 120)];
        
        
        //Label.text = myNewString ;
        labelan.lineBreakMode = UILineBreakModeWordWrap;
        labelan.numberOfLines=0;
      
       // labelan.textAlignment = UITextAlignmentCenter;
       // labelan.textAlignment = NSTextAlignmentLeft;
        
        //Label.text = @" bcbvbvbPassover Cookies by Frank Piuck  ";
        
        //Label.text =[NSString stringWithFormat:@"%d",maraca];
       // [self.view addSubview:Label];

        self.fliteDbLabel.backgroundColor= [UIColor greenColor];
	}
   //
/*
 
 and then right before you start your first OpenEars functionality (for instance, right before your first self.fliteController say:withVoice: message or right before your first self.pocketsphinxController startListeningWithLanguageModelAtPath:dictionaryAtPath:languageModelIsJSGF: message) send this message:
  
 */

}
- (void)nop{
    
    [self.pocketsphinxController suspendRecognition];
    self.fliteDbLabel.backgroundColor=[UIColor redColor];
    
    NSLog(@"NOR");    
}
- (void)sip{
    
    
     [self.pocketsphinxController resumeRecognition];
    self.fliteDbLabel.backgroundColor= [UIColor greenColor];

    NSLog(@"IOR");
    
}


- (void)kaSlideShowDidNext
{
    
    
    //minitanga sil
    
    // negra cavada casi depi
    UILabel *Label;
    //NSLog(appDelegate.sharedProperty);
    int value = [appDelegate.sharedProperty intValue];
    if ( value  < 22) {
        NSString *deviceModel = (NSString*)[UIDevice currentDevice].model;
        
        if ([[deviceModel substringWithRange:NSMakeRange(0, 4)] isEqualToString:@"iPad"]) {
            NSLog(@"iPad");
             Label = [[UILabel alloc] initWithFrame:CGRectMake(50, 550, 700, 120)];
              Label.font=[UIFont fontWithName:@"AmericanTypewriter-Bold" size:18.0];
        } else {
            NSLog(@"iPhone or iPod Touch");
            Label = [[UILabel alloc] initWithFrame:CGRectMake(20, 190, 280, 110)];
             Label.font=[UIFont fontWithName:@"AmericanTypewriter-Bold" size:12.0];
        }
        //UILabel *Label = [[UILabel alloc] initWithFrame:CGRectMake(0, 240, 320, 120)];
    
    NSLog(@"moving ima %d ", value);
    NSString* myNewString = [NSString stringWithFormat:@"%i", value];
    //Label.text = myNewString ;
    Label.lineBreakMode = UILineBreakModeWordWrap;
    Label.numberOfLines=0;
        //Label.
  
  //  Label.textAlignment = UITextAlignmentCenter;
        Label.textAlignment = NSTextAlignmentLeft;
        
    ///tanga
    // [Label.layer setCornerRadius:23];
//    Label.text = @"Lewis procured weapons at Harpers Ferry, Virginia (now in West Virginia), supervised the construction of a 55-foot (17-metre) keelboat, and secured smaller vessels, in addition to designing an iron-framed boat that could be assembled on the journey. As his co-commander he selected William Clark, who had been his military superior during the government’s battles with the Northwest Indian Federation in the early 1790s. The U.S. secretary of war denied Lewis’s request of a shared command, but Captain Lewis and Lieutenant Clark chose to address one another as “captain” to hide this fact from the other members of the expedition. For his part, Clark recruited men in Kentucky, oversaw their training that winter at Camp River Dubois in Illinois, and served as the expedition’s principal waterman and cartographer.";
    // text test big one
//     if ( value==2 || value == 11 ||  value == 13 ) {
//        NSString* myNewString1 = [NSString stringWithFormat:@"%@", names[value]];
//        ;
//        myNewString1  = [myNewString1 stringByAppendingString:@" \n A Timer Added for this task completion   Wait to Continue "];
//         Label.text =myNewString1;
//     }
//     else {
        labelan.text = names[value];
//     }
       // Label.text =@"";
        NSLog(@"ddddddddddddd %@ ", names[value]);
       // Label.text = names[value];
    [self.view addSubview:Label];
    int len = [names[value] length];
    len = len * 0.2 +5 ;
    //len=3;
    NSLog(@"Cicking ------------------- %d ", len);
    [_slideshow setDelay:len]; // Delay between transitions
         
    NSString * STRINGS_FILE = audio[value];
       
        NSURL *modelURL = [[NSBundle mainBundle] URLForResource:STRINGS_FILE withExtension:@"mp3"];
        //Then just init your player with the contents of that URL
        NSError *error;
        audioPlayer = [[AVAudioPlayer alloc] initWithContentsOfURL:modelURL error:&error];
        audioPlayer.numberOfLoops = 0;
        
        if (audioPlayer == nil){
            //NSLog(["audio kaput"]);
        }
        else
        {
            [self.pocketsphinxController suspendRecognition];
        self.fliteDbLabel.backgroundColor=[UIColor redColor];
        audioPlayer.delegate = self;
        [audioPlayer play];
        }
        //NSLog(@"k after5 Notif");
        int pika =0;
        NSString *string = names[value];
        if ([string rangeOfString:@"**"].location == NSNotFound) {
            //NSLog(@"string does not contain bla");
            pika=0;
        } else {
            //NSLog(@"string contains bla!");
            pika =1;
        }
        //
        
        int pika1 =0;
        NSString *string1 = names[value];
        NSLog(@"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",string1);
        if ([string1 rangeOfString:@"ZC"].location == NSNotFound) {
            //NSLog(@"string does not contain bla");
            pika1=0;
        } else {
            //NSLog(@"string contains bla!");
            pika1 =1;
            NSLog(@"XXXXXXXXXXXXXYYYYYYY");
        }
        if (pika1 ==1   ) {
 
            [_slideshow start];
        }
        //fdsfd
        //
        
        int pika11 =0;
        NSString *string11 = names[value];
        NSLog(@"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",string11);
        if ([string11 rangeOfString:@"!!!!"].location == NSNotFound) {
            //NSLog(@"string does not contain bla");
            pika11=0;
        } else {
            //NSLog(@"string contains bla!");
            pika11 =1;
            NSLog(@"XXXXXXXXXXXXXYYYYYYY");
        }
        if (pika11 ==1   ) {
            
            [_slideshow stop];
        }
        //fdsfd
        if (pika ==1   ) {
            NSLog(@"setting a notific jjjjjjjjjjjjjjjjjj");
            
            NSString* myNewString1 = [NSString stringWithFormat:@"%@", names[value]];
            UILocalNotification* localNotification = [[UILocalNotification alloc] init];;
            int delta = 28; // 3 mins with some safeguard .)182
                       localNotification.fireDate = [NSDate dateWithTimeIntervalSinceNow:delta];
//            NSString *msn1 = [NSDate dateWithTimeIntervalSinceNow:delta];
//            msn1 = [msn1 stringByAppendingString:names[value]];
            myNewString1  = [myNewString1 stringByAppendingString:@" \n Timer Ended You can continue"];
            localNotification.alertBody = myNewString1;
            localNotification.timeZone = [NSTimeZone defaultTimeZone];
            localNotification.alertAction = @"View";
            localNotification.soundName = @"ala1.caf";
            
            maraca++;
            localNotification.applicationIconBadgeNumber = value + 1;
            
            [[UIApplication sharedApplication] scheduleLocalNotification:localNotification];
           // locno[0]=msn1;
            
            // Doing something on the main thread
            
            NSArray *images = @[@"http://www.foundphotos.net/images/FoundPhotos/archives/archive102/IMGP0046.jpg"];
                       
//            dispatch_queue_t imageQueue = dispatch_queue_create("Image Queue",NULL);
//            
//            for (NSString *urlString in images) {
//                dispatch_async(imageQueue, ^{
//                    
//                    NSURL *url = [NSURL URLWithString:urlString];
//                    NSData *imageData = [NSData dataWithContentsOfURL:url];
//                    UIImage *image = [UIImage imageWithData:imageData];
//                    
//                    NSUInteger imageIndex = [images indexOfObject:urlString];
//                    UIImageView *imageVIew = (UIImageView *)[self.view viewWithTag:imageIndex];
//                    
//                    if (!imageVIew) return;
//                    
//                    dispatch_async(dispatch_get_main_queue(), ^{
//                        // Update the UI
//                        [imageVIew setImage:image];
//                    });
//                    
//                }); 
//            }
            //
      }

    }

   // }
}

-(void)kaSlideShowDidPrevious
{
    //NSLog(@"EEEEEEEEE"),
    NSLog(appDelegate.sharedProperty);
    int value = [appDelegate.sharedProperty intValue];
    value--;
    value--;
     UILabel *Label;
    if ( value  < 0) { value =21; }
    NSString *deviceModel = (NSString*)[UIDevice currentDevice].model;
    
    if ([[deviceModel substringWithRange:NSMakeRange(0, 4)] isEqualToString:@"iPad"]) {
        NSLog(@"iPad");
        Label = [[UILabel alloc] initWithFrame:CGRectMake(50, 550, 700, 120)];
         Label.font=[UIFont fontWithName:@"AmericanTypewriter-Bold" size:18.0];
    } else {
        NSLog(@"iPhone or iPod Touch");
        Label = [[UILabel alloc] initWithFrame:CGRectMake(20, 190, 280, 110)];
         Label.font=[UIFont fontWithName:@"AmericanTypewriter-Bold" size:12.0];
    }
    //UILabel *Label = [[UILabel alloc] initWithFrame:CGRectMake(0, 240, 320, 120)];
    
    NSLog(@"moving ima %d ", value);
    NSString* myNewString = [NSString stringWithFormat:@"%i", value];
    //Label.text = myNewString ;
    Label.lineBreakMode = UILineBreakModeWordWrap;
    Label.numberOfLines=0;
    //Label.
    
    //  Label.textAlignment = UITextAlignmentCenter;
    Label.textAlignment = NSTextAlignmentLeft;
    
    ///tanga
    //Label.text = names[value];
    labelan.text =names[value],
    [self.view addSubview:Label];
    int len = [names[value] length];
    len = len * 0.2 +5 ;
    //len=3;
    NSLog(@"Cicking ------------------- %d ", len);
    [_slideshow setDelay:len]; // Delay between transitions
    
    NSString * STRINGS_FILE = audio[value];
    
    NSURL *modelURL = [[NSBundle mainBundle] URLForResource:STRINGS_FILE withExtension:@"mp3"];
    //Then just init your player with the contents of that URL
    NSError *error;
    audioPlayer = [[AVAudioPlayer alloc] initWithContentsOfURL:modelURL error:&error];
    audioPlayer.numberOfLoops = 0;
    
    if (audioPlayer == nil){
        //NSLog(["audio kaput"]);
    }
    else
    {
        [self.pocketsphinxController suspendRecognition];
        self.fliteDbLabel.backgroundColor=[UIColor redColor];
        audioPlayer.delegate = self;
        [audioPlayer play];
    }

       //Label.text =[NSString stringWithFormat:@"%d",maraca];
    [self.view addSubview:Label];
}
//}

#pragma mark - KASlideShow delegate


#pragma mark - Button methods

- (IBAction)previous:(id)sender
{
     { [_slideshow previous];};
}

- (IBAction)next:(id)sender
{
    NSArray *pendingNotifications = [[UIApplication sharedApplication] scheduledLocalNotifications];
    
    // if there are any pending notifications -> adjust their badge number
     int micaela =0;
    if (pendingNotifications.count != 0)
    {
        // clear all pending notifications
       // [[UIApplication sharedApplication] cancelAllLocalNotifications];
        
        // the for loop will 'restore' the pending notifications, but with corrected badge numbers
        // note : a more advanced method could 'sort' the notifications first !!!
        //NSUInteger badgeNbr = 1;
       
        for (UILocalNotification *notification in pendingNotifications)
        {
            // modify the badgeNumber
           // notification.applicationIconBadgeNumber = badgeNbr++;
            NSString* mono=notification.alertBody;
            
            micaela =notification.applicationIconBadgeNumber ;
            // schedule 'again'
            //[[UIApplication sharedApplication] scheduleLocalNotification:notification];
        }
    }
   
    if ( micaela == 0 ){ [_slideshow next];}
    else               {
        int ret =0;
    };
}

- (IBAction)startStrop:(id)sender
{
    UIButton * button = (UIButton *) sender;
      // [self.pocketsphinxController stopListening];
    if([button.titleLabel.text isEqualToString:@"Start"]){
        
        
        [_slideshow start];
        [button setTitle:@"Stop" forState:UIControlStateNormal];
    }else{
        [_slideshow stop];
       // [self.pocketsphinxController stopListening];
        [button setTitle:@"Start"  forState:UIControlStateNormal];
    }
}
- (IBAction)pij:(id)sender
{
    UIButton * button = (UIButton *) sender;
     
    if([button.titleLabel.text isEqualToString:@"Voice Input On"]){
        
        NSLog(@"xxzzzzzzzzzzzs Ich habe recognition down");
        myGlobalFlag=NO;
            
      

        [button setTitle:@" Voice Test Mode " forState:UIControlStateNormal];
    }else{
        //
        myGlobalFlag=YES;

              
        [button setTitle:@"Voice Input On"  forState:UIControlStateNormal];
         NSLog(@"xxzzzzzzzzzzzs Ich habe recognition up");
    }
    
}
//krola

- (IBAction)swai:(id)sender
{
    UIButton * button = (UIButton *) sender;
           
    int value = [appDelegate.sharedProperty intValue];

    NSString * STRINGS_FILE = audio[value];
   

    NSURL *modelURL = [[NSBundle mainBundle] URLForResource:STRINGS_FILE withExtension:@"mp3"];
    //Then just init your player with the contents of that URL
    NSError *error;
    audioPlayer = [[AVAudioPlayer alloc] initWithContentsOfURL:modelURL error:&error];
    audioPlayer.numberOfLoops = 0;
    
    if (audioPlayer == nil  ){
        NSLog(@"audio kaput");
    }
    else
    {
        [self.pocketsphinxController suspendRecognition];
        self.fliteDbLabel.backgroundColor=[UIColor redColor];
        audioPlayer.delegate = self;
        [audioPlayer play];
    }
    

        NSLog(@"aquiles meo de la torre");
    
    
}







//krola
- (IBAction)switchType:(id)sender
{
    UIButton * button = (UIButton *) sender;
    UILabel  *Label ;
    [[FirstViewController alloc] initWithNibName:nil bundle:nil];
    //[_slideshow stop]; trolisima
    [_slideshow neu];
    NSString *deviceModel = (NSString*)[UIDevice currentDevice].model;
    
    if ([[deviceModel substringWithRange:NSMakeRange(0, 4)] isEqualToString:@"iPad"]) {
        NSLog(@"iPad");
        Label = [[UILabel alloc] initWithFrame:CGRectMake(50, 550, 700, 120)];
         Label.font=[UIFont fontWithName:@"AmericanTypewriter-Bold" size:18.0];
    } else {
        NSLog(@"iPhone or iPod Touch");
        Label = [[UILabel alloc] initWithFrame:CGRectMake(20, 190, 280, 110)];
         Label.font=[UIFont fontWithName:@"AmericanTypewriter-Bold" size:12.0];
    }
    //UILabel *Label = [[UILabel alloc] initWithFrame:CGRectMake(0, 240, 320, 120)];
    
    
    //Label.text = myNewString ;
    Label.lineBreakMode = UILineBreakModeWordWrap;
    Label.numberOfLines=0;
    //Label.
    
    //  Label.textAlignment = UITextAlignmentCenter;
    Label.textAlignment = NSTextAlignmentLeft;
       
   // Label.text = @" Passover Cookies by Frank Piuck  ";
    
    //Label.text =[NSString stringWithFormat:@"%d",maraca];
    [self.view addSubview:Label];
   
}
//- (PocketsphinxController *)pocketsphinxController {
//	if (pocketsphinxController == nil) {
//		pocketsphinxController = [[PocketsphinxController alloc] init];
//	}
//	return pocketsphinxController;
//}
- (void) pocketsphinxDidReceiveHypothesis:(NSString *)hypothesis recognitionScore:(NSString *)recognitionScore utteranceID:(NSString *)utteranceID {
     int vala = [recognitionScore intValue];
	NSLog(@"The received hypothesis is %@ with a score of %@ and an ID of %@ and a pija of %d", hypothesis, recognitionScore, utteranceID,vala); // Log it.
    //	if([hypothesis isEqualToString:@"CHANGE MODEL"]) { // If the user says "CHANGE MODEL", we will switch to the alternate model (which happens to be the dynamically generated model).
    //
    //		// Here is an example of language model switching in OpenEars. Deciding on what logical basis to switch models is your responsibility.
    //		// For instance, when you call a customer service line and get a response tree that takes you through different options depending on what you say to it,
    //		// the models are being switched as you progress through it so that only relevant choices can be understood. The construction of that logical branching and
    //		// how to react to it is your job, OpenEars just lets you send the signal to switch the language model when you've decided it's the right time to do so.
    //
    //		if(self.usingStartLanguageModel == TRUE) { // If we're on the starting model, switch to the dynamically generated one.
    //
    //			// You can only change language models with ARPA grammars in OpenEars (the ones that end in .languagemodel or .DMP).
    //			// Trying to switch between JSGF models (the ones that end in .gram) will return no result.
    //			[self.pocketsphinxController changeLanguageModelToFile:self.pathToDynamicallyGeneratedGrammar withDictionary:self.pathToDynamicallyGeneratedDictionary];
    //			self.usingStartLanguageModel = FALSE;
    //		} else { // If we're on the dynamically generated model, switch to the start model (this is just an example of a trigger and method for switching models).
    //			[self.pocketsphinxController changeLanguageModelToFile:self.pathToGrammarToStartAppWith withDictionary:self.pathToDictionaryToStartAppWith];
    //			self.usingStartLanguageModel = TRUE;
    //		}
    //	}
    //vala < -30000
   if ( 1== 1){
    int value = [recognitionScore intValue];
	if (  hypothesis.length > 10   || vala < -20000) {
        NSString *myT = [NSString stringWithFormat:@"%d", vala];
        
        hypothesis=@"UNRECOGNISED INPUT ";
    }
    
    //
    else{
//        if ( ([hypothesis isEqual: @"STOP"] || [hypothesis isEqual: @"PARE" ] ) ){ [_slideshow stop]; ;
//        }   
//        else if (([hypothesis isEqual: @"START"] || [hypothesis isEqual: @"SIGA" ] )  ) { [_slideshow start]; ;
//        }
         if (([hypothesis isEqual: @"NEXT"] &&  myGlobalFlag ==YES  )   ) {
             NSArray *pendingNotifications = [[UIApplication sharedApplication] scheduledLocalNotifications];
             
             // if there are any pending notifications -> adjust their badge number
             int micaela =0;
             if (pendingNotifications.count != 0)
             {
                                  
                 for (UILocalNotification *notification in pendingNotifications)
                 {
                     // modify the badgeNumber
                     // notification.applicationIconBadgeNumber = badgeNbr++;
                     NSString* mono=notification.alertBody;
                     
                     micaela =notification.applicationIconBadgeNumber ;
                     // schedule 'again'
                     //[[UIApplication sharedApplication] scheduleLocalNotification:notification];
                 }
             }
             
             if ( micaela == 0 ){ [_slideshow next];}
             else               {};
             
             
             
            // [_slideshow next];;
        }
        else if (([hypothesis isEqual: @"BACK"] ) && index > 0  &&   myGlobalFlag ==YES  ) { [_slideshow previous];;
        }
        else if (([hypothesis isEqual: @"REPEAT"] ) &&   myGlobalFlag ==YES  ) {
            
            
            int value = [appDelegate.sharedProperty intValue];
            
            NSString * STRINGS_FILE = audio[value];
            
            
            NSURL *modelURL = [[NSBundle mainBundle] URLForResource:STRINGS_FILE withExtension:@"mp3"];
            //Then just init your player with the contents of that URL
            NSError *error;
            audioPlayer = [[AVAudioPlayer alloc] initWithContentsOfURL:modelURL error:&error];
            audioPlayer.numberOfLoops = 0;
            
            if (audioPlayer == nil  ){
                NSLog(@"audio kaput");
            }
            else
            {
                [self.pocketsphinxController suspendRecognition];
                self.fliteDbLabel.backgroundColor=[UIColor redColor];
                audioPlayer.delegate = self;
                [audioPlayer play];
            }
            
            
            NSLog(@"aquiles meo de la torre");
            
;
        }
        else if ([hypothesis isEqual: @"RESET" ]  &&   myGlobalFlag ==YES ) {
            //[_slideshow stop]; trolisima 
            NSString *deviceModel = (NSString*)[UIDevice currentDevice].model;
            UILabel *Label;
           [_slideshow neu];
         
            
            if ([[deviceModel substringWithRange:NSMakeRange(0, 4)] isEqualToString:@"iPad"]) {
                NSLog(@"iPad");
                Label = [[UILabel alloc] initWithFrame:CGRectMake(50, 550, 700, 120)];
                 Label.font=[UIFont fontWithName:@"AmericanTypewriter-Bold" size:18.0];
            } else {
                NSLog(@"iPhone or iPod Touch");
                Label = [[UILabel alloc] initWithFrame:CGRectMake(20, 190, 280, 110)];
                 Label.font=[UIFont fontWithName:@"AmericanTypewriter-Bold" size:12.0];
            }
            //UILabel *Label = [[UILabel alloc] initWithFrame:CGRectMake(0, 240, 320, 120)];
            
            
            //Label.text = myNewString ;
            Label.lineBreakMode = UILineBreakModeWordWrap;
            Label.numberOfLines=0;
            //Label.
            
            //  Label.textAlignment = UITextAlignmentCenter;
            Label.textAlignment = NSTextAlignmentLeft;
            
           // Label.text = @" Passover Cookies by Frank Piuck  ";
            
            //Label.text =[NSString stringWithFormat:@"%d",maraca];
            [self.view addSubview:Label];
        }
        else {
            if ( myGlobalFlag ==YES)
            {hypothesis=@"INVALID ENTRY";}
        }
    }
//    self.fliteDbLabel.backgroundColor= [UIColor whiteColor];
//
   }
     int trolla = [appDelegate.sharedProperty intValue];

	self.fliteDbLabel.text  = [NSString stringWithFormat:@"   Last Input heard \"%@\"", hypothesis ]; // Show it in the status box.

	// This is how to use an available instance of FliteController. We're going to repeat back the command that we heard with the voice we've chosen.
    //	[self.fliteController say:[NSString stringWithFormat:@"You said %@",hypothesis] withVoice:self.slt];
}
- (PocketsphinxController *)pocketsphinxController {
	if (pocketsphinxController == nil) {
		pocketsphinxController = [[PocketsphinxController alloc] init];
	}
	return pocketsphinxController;
}


- (void) pocketsphinxDidStartCalibration {
	NSLog(@"Pocketsphinx calibration has started.");
}

- (void) pocketsphinxDidCompleteCalibration {
	NSLog(@"Pocketsphinx calibration is complete.");
}

- (void) pocketsphinxDidStartListening {
	NSLog(@"Pocketsphinx is now listening.");
}

- (void) pocketsphinxDidDetectSpeech {
	NSLog(@"Pocketsphinx has detected speech.");
}

- (void) pocketsphinxDidDetectFinishedSpeech {
	NSLog(@"Pocketsphinx has detected a period of silence, concluding an utterance.");
}

- (void) pocketsphinxDidStopListening {
	NSLog(@"Pocketsphinx has stopped listening.");
}

- (void) pocketsphinxDidSuspendRecognition {
	NSLog(@"Pocketsphinx has suspended recognition.");
}

- (void) pocketsphinxDidResumeRecognition {
	NSLog(@"Pocketsphinx has resumed recognition.");
}

- (void) pocketsphinxDidChangeLanguageModelToFile:(NSString *)newLanguageModelPathAsString andDictionary:(NSString *)newDictionaryPathAsString {
	NSLog(@"Pocketsphinx is now using the following language model: \n%@ and the following dictionary: %@",newLanguageModelPathAsString,newDictionaryPathAsString);
}

- (void) pocketSphinxContinuousSetupDidFail { // This can let you know that something went wrong with the recognition loop startup. Turn on OPENEARSLOGGING to learn why.tion loop has failed for some reason, please turn on OpenEarsLogging to learn more.");
}
- (void) testRecognitionCompleted {
	NSLog(@"A test file that was submitted for recognition is now complete.");
}

-(IBAction) switchValueChanged{
    NSLog(@"Swiiiiiitch -----------");
    if (toggleSwitch.on) { switchLabel.text = @"Voice Commands  ON ";   myGlobalFlag=YES;
    }
    else { switchLabel.text = @"Voice Commands - TEST ";  myGlobalFlag=NO;
    }
}

-(IBAction) toggleButtonPressed{
    if(toggleSwitch.on){
        [toggleSwitch setOn:NO animated:YES];
    }
    else{
        [toggleSwitch setOn:YES animated:YES];
        
    }
    
}
@end
