import { DifficultyLevel } from "./DifficultyLevel.model";
import { Module } from "./module/Module.model";
import { Lecture } from "./module/lecture/Lecture.model";

export class Topic {

    id: number | null;
    title: string | null;
    description: string | null;
    difficulty: DifficultyLevel | null;
    modules: Module[] | null;
    topicLogoPath: string | null;
    topicImagePath: string | null;
    overallProgress: number | null;
    totalHours: number | null;
    stoppedModuleId: number | null;
    stoppedLectureId: number | null;
    route: string | null;

    constructor (moduleHeaderInfo?: Topic) {

        this.id = moduleHeaderInfo?.id || null;
        this.title = moduleHeaderInfo?.title || null;
        this.description = moduleHeaderInfo?.description || null;
        this.difficulty = moduleHeaderInfo?.difficulty || null;
        this.modules = moduleHeaderInfo?.modules || null;
        this.topicLogoPath = moduleHeaderInfo?.topicLogoPath || null;
        this.topicImagePath = moduleHeaderInfo?.topicImagePath || null;
        this.overallProgress = moduleHeaderInfo?.overallProgress || null;
        this.totalHours = moduleHeaderInfo?.totalHours || null;
        this.stoppedModuleId = moduleHeaderInfo?.stoppedModuleId || null;
        this.stoppedLectureId = moduleHeaderInfo?.stoppedLectureId || null;
        this.route = moduleHeaderInfo?.route || null;

    }

}