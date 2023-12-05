import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../template.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-template-view',
  templateUrl: './template-view.component.html',
  styleUrls: ['./template-view.component.css'],
  providers: [FormsModule]
})
export class TemplateViewComponent implements OnInit {
  templateData: any
  uploadedImage: File[] = []

  constructor(private templateService: TemplateService) { }

  ngOnInit(): void {
    this.templateService.getTemplate().subscribe(data => {
      this.templateData = data
    })
  }

  invertLayout():boolean{
    return this.templateData && this.templateData.fields[2].default
  }

}
