import {GenerativeModel, GoogleGenerativeAI, type StartChatParams} from "@google/generative-ai";

class GoogleGemini{

    readonly _geminiToken: string;
    private _genAI: GoogleGenerativeAI;
    private _model: GenerativeModel;

    constructor(geminiToken:string, model:string)
    {
        this._geminiToken = geminiToken;
        this._genAI = new GoogleGenerativeAI(this._geminiToken);
        this._model = this._genAI.getGenerativeModel({ model: model });
    }

    public startChat()
    {
        const startChatParams: StartChatParams = {}
        return this._model.startChat()
    }
}