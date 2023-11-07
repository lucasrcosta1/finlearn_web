export class FrequentQuestion {

    id: number | null;
    name: string | null;
    subject: string | null; 
    answer: string | null; 
    expanded: boolean; 

    constructor (frequentQuestion?: FrequentQuestion) {

        this.id = frequentQuestion?.id || null;
        this.name = frequentQuestion?.name || null;
        this.subject = frequentQuestion?.subject || null;
        this.answer = frequentQuestion?.answer || null;
        this.expanded = frequentQuestion?.expanded || false;

    }

}