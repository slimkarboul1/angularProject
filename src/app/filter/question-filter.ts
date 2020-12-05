import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '../Models/question';
@Pipe({
    name : 'questionFilter'
})

export class questionFilter implements PipeTransform
{
    transform(questions: Question[],searchName : string) : Question[]{
        if(!questions || !searchName){
            return questions;
        }
        return questions.filter(question =>
            question.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1)
    }
    
}