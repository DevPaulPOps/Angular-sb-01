import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  firstName!: string;
  @ViewChild('editableContent') editableContent!: ElementRef;

  constructor(private helloService: HelloService) {}

  ngOnInit(): void {
    this.helloService.getFirstName().subscribe((result) => {
      this.firstName = result.firstName;
      console.log(
        'Valeur de firstName après la récupération :',
        this.firstName
      );
    });
  }

  onFirstNameChange(): void {
    const editedValue = this.editableContent.nativeElement.textContent || '';
    this.firstName = editedValue.trim();
    console.log('Valeur de firstName avant la mise à jour :', this.firstName);

    this.helloService.updateFirstName(this.firstName).subscribe(
      (response) => {
        console.log('Prénom mis à jour avec succès:', response.firstName);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du prénom :', error);
      }
    );
  }
}
