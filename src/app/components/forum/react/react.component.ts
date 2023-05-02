import { Component, OnDestroy, OnInit, EventEmitter, Input, Output, } from '@angular/core';
import { Post } from 'src/app/model/Post';
import { ReactService } from 'src/app/services/react.service';
import * as _ from "lodash";
import { React } from 'src/app/model/React';


@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {
  //Can be a post or comment
  @Input() itemId!: number;//postId
  @Input() userId!: number;//userId

  react!:React;

  showEmojis = false;
  emojiList!: string[];
  reactionCount: any;
  userReaction!: React;
  subscription: any;


  constructor(private reactService: ReactService) { }

  ngOnInit() {
    this.react = new React();
    this.emojiList = this.reactService.emojiList;
    this.reactService.userReactions(this.userId, this.itemId).subscribe((result: React) => {
      this.userReaction = result;
    });
  }
  toggleShow(bool:boolean) {
    this.showEmojis = bool;
  }
  emojiPath(emoji:string) {
    return `assets/reactions/${emoji}.png`
  }
  getIt(){
    this.reactService.getReactById(this.userReaction.id).subscribe((result: React) => {
      this.userReaction = result;
    });
  }
  reactPost(emoji:string) {
      this.reactService.addOrUpdate(emoji,this.userId,this.itemId).subscribe((result: React) => {
        this.userReaction = result;
      },
      () => {
        this.getIt();
      }
      );
    }

}
