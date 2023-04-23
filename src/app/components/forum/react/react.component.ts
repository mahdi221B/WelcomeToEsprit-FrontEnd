import { Component, OnDestroy, OnInit, EventEmitter, Input, Output, } from '@angular/core';
import { Post } from 'src/app/model/Post';
import { ReactService } from 'src/app/services/react.service';
import * as _ from "lodash";


@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit, OnDestroy {
  //Can be a post or comment
  @Input() itemId!: number;
  @Input() userId!: number;
  showEmojis = false;
  emojiList!: string[];
  reactionCount: any;
  userReaction: any;
  subscription: any;

  constructor(private reactService: ReactService) { }

  ngOnInit() {
    this.emojiList = this.reactService.emojiList
    this.subscription = this.reactService.getReactByUserIdAndPostId(this.userId, this.itemId)
      .subscribe(reactions => {
        this.reactionCount = this.reactService.countReactions(reactions)
        this.userReaction = this.reactService.userReaction(reactions, this.userId)
      })
  }
  //mouse leave and mouse eneter event
  toggleShow(bool:boolean) {
    this.showEmojis = bool;
  }
  //Give us back the emoji path within the folder
  emojiPath(emoji:string) {
    return `assets/reactions/${emoji}.svg`
  }
  react(val:any) {
    if (this.userReaction === val) {
      this.reactService.removeReaction(this.itemId)
    } else {
      //this.reactService.addOrUpdate(this.itemId, val)
    }
  }
  hasReactions(index:any) {
    return _.get(this.reactionCount, index.toString())
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe() 
  }



}