import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { block } from 'src/app/model/block';
import { BlockService } from 'src/app/services/blockservice';

@Component({
  selector: 'app-update-block',
  templateUrl: './update-block.component.html',
  styleUrls: ['./update-block.component.css']
})
export class UpdateBlockComponent implements OnInit {
  id!: number;
  blocks!: any;
  bloc!: block;
  param:string="";
  constructor(private bs: BlockService, private route: ActivatedRoute, private router:Router) {
    this.route.params.subscribe(params => {
      this.param=params['id'];
    })
  }
  ngOnInit(): void {
    this.bloc = new block()
    this.blocksList();
   ;
  }
  blocksList() {
    this.bs.getAllblocks().subscribe((data) => {
      this.blocks = data;
      this.bloc= this.blocks.find((p: block) => { return p.id.toString() === this.param });
    })
  }

  public update() {
    this.bs.updateBlock(this.bloc).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/blocks']);
    })
   
  }
}
