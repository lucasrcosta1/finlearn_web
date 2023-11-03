export class DifficultyLevel {

    difficultyLevelName: string | null;
    difficultyLevelScore: number | null;

    constructor (difficultyLevel?: DifficultyLevel) {

        this.difficultyLevelName = difficultyLevel?.difficultyLevelName || null;
        this.difficultyLevelScore = difficultyLevel?.difficultyLevelScore || null;

    }

}