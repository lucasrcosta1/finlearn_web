import { DifficultyLevel } from "./DifficultyLevel.model";
import { Module } from "./module/Module.model";
import { Lecture } from "./module/lecture/Lecture.model";

export class Topic {

    title: string | null;
    description: string | null;
    difficulty: DifficultyLevel | null;
    modules: Module[] | null;
    topicImagePath: string | null;
    overallProgress: number | null;
    totalHours: number | null;
    stoppedAt: Lecture | null;

    constructor (moduleHeaderInfo?: Topic) {

        this.title = moduleHeaderInfo?.title || null;
        this.description = moduleHeaderInfo?.description || null;
        this.difficulty = moduleHeaderInfo?.difficulty || null;
        this.modules = moduleHeaderInfo?.modules || null;
        this.topicImagePath = moduleHeaderInfo?.topicImagePath || null;
        this.overallProgress = moduleHeaderInfo?.overallProgress || null;
        this.totalHours = moduleHeaderInfo?.totalHours || null;
        this.stoppedAt = moduleHeaderInfo?.stoppedAt || null;

    }

}