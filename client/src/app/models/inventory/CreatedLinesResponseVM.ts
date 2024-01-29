export class CreatedLinesResponseVM
{
    insertedLineIds: number[] = null;
    ignoredLineIds: number[] = null;
    updatedLineIds: number[] = null;

    static fromApi(model: CreatedLinesResponseVM) {
        return Object.assign(new CreatedLinesResponseVM(), model);
    }
}