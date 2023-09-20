import { getItems } from "@/sanity/sanity.query";


export default async function Quiz() {
    const items = await getItems();
    console.log(items)
    return (
        <div className="quiz-container">
            <div className="question-container">Question</div>
            <div className="answer-buttons-container">
                <button class="btn">Answer 1</button>
                <button class="btn">Answer 2</button>
                <button class="btn">Answer 3</button>
                <button class="btn">Answer 4</button>
            </div>
            <div className="controls-container">
                <button className="start-btn btn">Start</button>
                <button className="next-btn btn">Next</button>
            </div>
        </div>
    )
}