export class Card {

    topicLogoPath: string | null;
    title: string | null;
    route: string | null;
    description: string | null;

    constructor (card?: Card) {

        this.topicLogoPath = card?.topicLogoPath || null;
        this.title = card?.title || null;
        this.route = card?.route || null;
        this.description = card?.description || null;

    }


}