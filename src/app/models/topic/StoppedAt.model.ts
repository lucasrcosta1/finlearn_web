export class StoppedAt {

    topicName: string | null;
    moduleName: string | null;
    lectureName: string | null;
    stoppedAt: number | null;

    constructor (stoppedAt?: StoppedAt) {

        this.topicName = stoppedAt?.topicName || null;
        this.moduleName = stoppedAt?.moduleName || null;
        this.lectureName = stoppedAt?.lectureName || null;
        this.stoppedAt = stoppedAt?.stoppedAt || null;

    }

}