import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { block } from 'src/app/model/block';
import { BlockService } from 'src/app/services/blockservice';


@Component({
  selector: 'app-add-block',
  templateUrl: './add-block.component.html',
  styleUrls: ['./add-block.component.css']
})
export class AddBlockComponent implements OnInit {
  dataa: Subscription = new Subscription;
  data:any
  bloc !:block;
  constructor(private blockservice: BlockService ,private router:Router) { }

  ngOnInit(): void {this.bloc=new block();
  }
  addBlock(FormBlock:any) {
    
    this.data = this.blockservice.addBlock(FormBlock.value).subscribe(
      data => {
        console.log(data)
      })
    this.router.navigate(['/blocks'])
  }
 
  public addblock(){

     this.blockservice.addBlock(this.bloc).subscribe((Response)=>{
      console.log(Response);
      this.router.navigate(['/blocks']);
    })
  }
}

