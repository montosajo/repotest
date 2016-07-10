//
//  dbm.h
//  ReactNativeBlog
//
//  Created by giorgio borgia on 7/7/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#ifndef dbm_h
#define dbm_h
//
//  DBManager.h
//  SQLite3DBSample
//
//  Created by Gabriel Theodoropoulos on 25/6/14.
//  Copyright (c) 2014 Appcoda. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface DBManager : NSObject

@property (nonatomic, strong) NSMutableArray *arrColumnNames;

@property (nonatomic) int affectedRows;

@property (nonatomic) long long lastInsertedRowID;



-(instancetype)initWithDatabaseFilename:(NSString *)dbFilename;

-(NSArray *)loadDataFromDB:(NSString *)query;

-(void)executeQuery:(NSString *)query;

@end

#endif /* dbm_h */
