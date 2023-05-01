import { Component, OnInit } from '@angular/core';
import { block } from '../model/block';
import { BlockService } from '../services/blockservice';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
 
dataa: Subscription = new Subscription;
 blocks:any
 bloc !:block;
 
 constructor(private blockservice: BlockService, private router: Router ){}
 
  ngOnInit(): void {
    this.blocksList();
    this.bloc = new block();
  }

  blocksList(){
    this.blockservice.getAllblocks().subscribe((data)=>{
      this.blocks = data;
    })
    console.log(this.blocks);
  }

  deleteBlock(id:number){
    this.dataa = this.blockservice.deleteBlock(id).subscribe(d=>{
      this.blockservice.getAllblocks().subscribe((data)=>{
        this.blocks = data;
      })
    })
  }
  public addblock(){

    return this.blockservice.addBlock(this.bloc).subscribe((Response)=>{
      console.log(Response);
      
    })
  }


  }

