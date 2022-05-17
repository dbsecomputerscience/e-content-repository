import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {Subject, Grade} from '../common/interfaces';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-animated-videos',
  templateUrl: './animated-videos.component.html',
  styleUrls: ['./animated-videos.component.css']
})
export class AnimatedVideosComponent implements OnInit {
  formVisible=true;
  selectedGrade: string;
  selectedSubject: string;
  videoData:any;
  grades: Grade[] = [
    {value: 'grade-1', viewValue: 'Grade-1'},
    {value: 'grade-2', viewValue: 'Grade-2'},
    {value: 'grade-3', viewValue: 'Grade-3'},
    {value: 'grade-4', viewValue: 'Grade-4'},
    {value: 'grade-5', viewValue: 'Grade-5'},
    {value: 'grade-6', viewValue: 'Grade-6'},
    {value: 'grade-7', viewValue: 'Grade-7'},
    {value: 'grade-8', viewValue: 'Grade-8'},
    {value: 'grade-9', viewValue: 'Grade-9'},
    {value: 'grade-10', viewValue: 'Grade-10'},
    {value: 'grade-11', viewValue: 'Grade-11'},
    {value: 'grade-12', viewValue: 'Grade-12'},
  ];

  subjects: Subject[]=[
    {value: 'eng', viewValue: 'English'},
    {value: 'hindi', viewValue: 'Hindi'},
    {value: 'maths', viewValue: 'Maths'},
    {value: 'sst', viewValue: 'SST'},
    {value: 'science', viewValue: 'SCience'},
  ];

  videoList=[
    {
      grade:'grade-1',
      videos:[
        'https://youtube.com/embed/up_yL6J4hCs',
        'https://youtube.com/embed/6U92SgaMT5s',
        'https://youtube.com/embed/8oMtsuiirDo',
        'https://youtube.com/embed/cDQOhSkJLVw',
        'https://youtube.com/embed/fKWRk0IXotI'
        ]
    },
    {
      grade:'grade-2',
      videos:[
      'https://youtube.com/embed/l5T1CgowkFI',
      'https://youtube.com/embed/SVA7w1PHKTw',
      'https://youtube.com/embed/MmcSBVX0Ixo',
      'https://youtube.com/embed/k_v0v0yxNaQ',
      'https://youtube.com/embed/6iu_FgMfid0'
      ]
    },
    {
      grade:'grade-3',
      videos:[
        'https://youtube.com/embed/jQTbFHOBJI4',
        'https://youtube.com/embed/b7AkNKZsV-4c',
        'https://youtube.com/embed/5ZkMbLkGims',
        'https://youtube.com/embed/BI1Syz9I2n0',
        'https://youtube.com/embed/DJy4PV6kETM'
        ]
    },
    {
      grade:'grade-4',
      videos:[
        'https://www.youtube.com/embed/fE6Y7n-YUuU',
        'https://www.youtube.com/embed/VxBEmaaSh1c',
        'https://www.youtube.com/embed/wdFbWn0Yslg',
        'https://www.youtube.com/embed/AJlQKzZ0r3o'
        ]
    },
    {
      grade:'grade-5',
      videos:[
        'https://www.youtube.com/embed/LwIqSfgBpbQ',
        'https://www.youtube.com/embed/ZqLeGm4k6CU',
        'https://www.youtube.com/embed/yRwmr7CqnrY',
        'https://www.youtube.com/embed/rMmrdSkX2Y4',
        'https://www.youtube.com/embed/dGAEvyDdYQA'
        ]
    },
    {
      grade:'grade-6',
      videos:[
        'https://www.youtube.com/embed/sCkC2GECfFk',
        'https://www.youtube.com/embed/9Kr7Xt5K2Pw',
        'https://www.youtube.com/embed/al9HcVL6j5k',
        'https://www.youtube.com/embed/Jm4HT3w_VUQ',
        'https://www.youtube.com/embed/W4U8HyIwTAg'
        ]
    },
    {
      grade:'grade-7',
      videos:[
        'https://www.youtube.com/embed/fE6Y7n-YUuU',
        'https://www.youtube.com/embed/VxBEmaaSh1c',
        'https://www.youtube.com/embed/wdFbWn0Yslg',
        'https://www.youtube.com/embed/AJlQKzZ0r3o'
        ]
    },
    {
      grade:'grade-8',
      videos:[
        'https://www.youtube.com/embed/fE6Y7n-YUuU',
        'https://www.youtube.com/embed/VxBEmaaSh1c',
        'https://www.youtube.com/embed/wdFbWn0Yslg',
        'https://www.youtube.com/embed/AJlQKzZ0r3o'
        ]
    },
    {
      grade:'grade-9',
      videos:[
        'https://www.youtube.com/embed/fE6Y7n-YUuU',
        'https://www.youtube.com/embed/VxBEmaaSh1c',
        'https://www.youtube.com/embed/wdFbWn0Yslg',
        'https://www.youtube.com/embed/AJlQKzZ0r3o'
        ]
    },
    {
      grade:'grade-10',
      videos:[
        'https://www.youtube.com/embed/fE6Y7n-YUuU',
        'https://www.youtube.com/embed/VxBEmaaSh1c',
        'https://www.youtube.com/embed/wdFbWn0Yslg',
        'https://www.youtube.com/embed/AJlQKzZ0r3o'
        ]
    },
    {
      grade:'grade-11',
      videos:[
        'https://www.youtube.com/embed/fE6Y7n-YUuU',
        'https://www.youtube.com/embed/VxBEmaaSh1c',
        'https://www.youtube.com/embed/wdFbWn0Yslg',
        'https://www.youtube.com/embed/AJlQKzZ0r3o'
        ]
    },
    {
      grade:'grade-12',
      videos:[
      'https://www.youtube.com/embed/fE6Y7n-YUuU',
      'https://www.youtube.com/embed/VxBEmaaSh1c',
      'https://www.youtube.com/embed/wdFbWn0Yslg',
      'https://www.youtube.com/embed/AJlQKzZ0r3o'
      ]
    },
  ];

  constructor(private _sanitizer: DomSanitizer) {
   }

  ngOnInit(): void {
  }

  onSubmit(formData){
    this.formVisible=false;
    console.log(formData);

    this.videoData = this.videoList.filter(element =>{
      return (element.grade === formData.grade);
    });

    console.log(this.videoData);
  }


}
