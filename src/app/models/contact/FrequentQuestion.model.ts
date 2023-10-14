export class FrequentQuestion {

    id: number | null;
    name: string | null;
    subject: string | null; 
    description: string | null; 
    answer: string | null; 
    expanded: boolean; 

    constructor (frequentQuestion?: FrequentQuestion) {

        this.id = frequentQuestion?.id || null;
        this.name = frequentQuestion?.name || null;
        this.subject = frequentQuestion?.subject || null;
        this.description = frequentQuestion?.description || null;
        this.answer = frequentQuestion?.answer || null;
        this.expanded = frequentQuestion?.expanded || false;

    }

}