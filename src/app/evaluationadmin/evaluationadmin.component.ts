import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvaluationSerivceService } from '../services/evaluation-serivce.service';
import { Evaluation } from '../models/Evaluation';
import { Criterion } from '../models/Criterion';

@Component({
  selector: 'app-evaluationadmin',
  templateUrl: './evaluationadmin.component.html',
  styleUrls: ['./evaluationadmin.component.scss']
})
export class EvaluationadminComponent {
  constructor(private service: EvaluationSerivceService,private formBuilder: FormBuilder) {
    this.Formm = this.formBuilder.group({
      artistry: ['', [Validators.required]],
      technique: ['', Validators.required],
      choreography: ['', [Validators.required]],
      expressionAndEmotion: ['', Validators.required],
      performanceQuality: ['', [Validators.required]],
      stagePresence: ['', Validators.required],
      synchroAndPrecision: ['', [Validators.required]],
     id: ['', [Validators.required]]
    });
   }
  Evaluations!: Evaluation[];
  Formm: FormGroup;
  idscore!:number;
  openform:boolean=false;
  ngOnInit(): void {
    this.service.getAllEvaluations().subscribe(data => {
    // ts-@ignore
    this.Evaluations=data;
    console.log(this.Evaluations)

    });
  }
  closeform(){
    this.openform=false;
  }
open(c:Criterion,idscore:number){
  this.openform=true;
  this.idscore=idscore;
  this.Formm.patchValue({
    artistry: c.artistry || '',
    technique: c.technique || '',
    choreography: c.choreography || '',
    expressionAndEmotion: c.expressionAndEmotion || '',
    performanceQuality: c.performanceQuality || '',
    stagePresence: c.stagePresence || '',
    synchroAndPrecision: c.synchroAndPrecision || '',
    id: c.id || '',

  })
}
submit(){
  if(!this.Formm.valid){
    alert(this.Formm.errors)
  }
  if(this.Formm.valid){
    let c =new Criterion;
    c.id=this.Formm.get('id')?.value;
    c.artistry=this.Formm.get('artistry')?.value;
    c.technique=this.Formm.get('technique')?.value;
    c.choreography=this.Formm.get('choreography')?.value;
    c.expressionAndEmotion=this.Formm.get('expressionAndEmotion')?.value;
    c.performanceQuality=this.Formm.get('performanceQuality')?.value;
    c.stagePresence=this.Formm.get('stagePresence')?.value;
    c.synchroAndPrecision=this.Formm.get('synchroAndPrecision')?.value;
   this.service.UpdateScore(c,this.idscore).subscribe((data) => {location.reload()},
   error => {
     console.log(error)
   }
 );
  }
}
deleteevaluation(id:number){
  this.service.deleteEvaluation(id).subscribe((data) => {location.reload()},
  error => {
    console.log(error)
  }
);
}
deltescore(id:number){
  this.service.DeleteScore(id).subscribe((data) => {location.reload()},
  error => {
    console.log(error)
  }
);
}

}


