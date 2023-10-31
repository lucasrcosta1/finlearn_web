import { Module } from "../Module.model";

export class Lecture {

    title: string | null;
    difficulty: number | null;
    lectureSize: number | null;
    seenAlready: boolean | null;
    stoppedAt: number | null;
    videoPath: string | null;
    lectureLogo: string | null;

    constructor (moduleClass?: Lecture) {

        this.title = moduleClass?.title || null;
        this.difficulty = moduleClass?.difficulty || null;
        this.lectureSize = moduleClass?.lectureSize || null;
        this.seenAlready = moduleClass?.seenAlready || null;
        this.stoppedAt = moduleClass?.stoppedAt || null;
        this.videoPath = moduleClass?.videoPath || null;
        this.lectureLogo = moduleClass?.lectureLogo || null;

    }

}