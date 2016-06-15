//
//  FirstViewController.h
//  baka
//
//  Created by giorgio borgia on 8/28/13.
//  Copyright (c) 2013 giorgio borgia. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <Slt/Slt.h>

#import <OpenEars/PocketsphinxController.h>
#import <OpenEars/AcousticModel.h>
#import <OpenEars/OpenEarsEventsObserver.h>
#import <AVFoundation/AVFoundation.h>
#import <OpenEars/LanguageModelGenerator.h>
extern BOOL myGlobalFlag;
extern NSArray *locno;
//in your app and add the following line right underneath it:
//#import <RejectoDemo/LanguageModelGenerator+Rejecto.h>
Slt *slt;
PocketsphinxController *pocketsphinxController;
OpenEarsEventsObserver *openEarsEventsObserver;;
//@interface FirstViewController : UIViewController<KASlideShowDelegate> {
@interface FirstViewController : UIViewController < KASlideShowDelegate ,UIAlertViewDelegate > {
    
    IBOutlet UILabel *labelan;
IBOutlet UILabel *plabel;
    IBOutlet UILabel *fliteDbLabel;
IBOutlet UIButton *swai;
    IBOutlet UIButton *pij;
    UILabel *switchLabel;
    UISwitch *toggleSwitch;

}
@property (strong, nonatomic) Slt *slt;
@property (strong, nonatomic) PocketsphinxController *pocketsphinxController;
@property (strong, nonatomic) OpenEarsEventsObserver *openEarsEventsObserver;
@property (nonatomic, retain) IBOutlet UILabel *plabel;
@property (nonatomic, retain) IBOutlet UILabel *fliteDbLabel;
@property (nonatomic, retain) IBOutlet UIButton *swai;
@property (nonatomic, retain) IBOutlet UIButton *pij;

@property (nonatomic,retain) IBOutlet UILabel *switchLabel;
@property (nonatomic,retain) IBOutlet UISwitch *toggleSwitch;


-(IBAction) switchValueChanged;
-(IBAction) toggleButtonPressed;


@end

//
//la cint de sil mas chica k la ver

//sh}

//sh@end



//
//
@interface FifaViewController : UIViewController <OpenEarsEventsObserverDelegate> {
    //  In the middle part where instance variables go:
}
   
    //  In the bottom part where class properties go:
    @property (strong, nonatomic) OpenEarsEventsObserver *openEarsEventsObserver;
    @end

//

@interface FifanViewController : UIViewController <AVAudioPlayerDelegate>;

@property (strong, nonatomic) AVAudioPlayer *audioPlayer;
@end



