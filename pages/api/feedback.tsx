import fs from "fs";
import path from "path";
import { json } from "stream/consumers";

function handler(req, res) {
    if (res.method === "POST") {
        const emailValue = res.body.email;
        const FeedbackValue = res.body.feedback;
        const newfeedBack = {
            id: new Date().toISOString(),
            email: emailValue,
            feedback: FeedbackValue,
        };
        const filepath = path.join(process.cwd(), "data", "feedback.json");
        const fileData = fs.readFileSync(filepath);
        const data = JSON.parse(fileData);
        data.push(newfeedBack);
        fs.writeFileSync(filepath, JSON.stringify(data));
        res.status(201).json({ message: "Success", feedback: newfeedBack });
    } else {
        res.status(200).json({ message: "This works ...." });
    }
}
export default handler;
