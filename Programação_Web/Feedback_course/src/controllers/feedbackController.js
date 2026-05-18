import path from "node:path";

const FEEDBACKS = []

class FeedbackController {
    create(request, response) {
        const { name, feedback } = request.body;

        const newFeedback = {
        id: Date.now().toString(),
        name,
        feedback
        }

        FEEDBACKS.push(newFeedback);

        response.redirect('/feedbacks/lista')
    }

    exibir(request, response) {
        response.sendFile(path.resolve(process.cwd(), "public", "FeedBackList.html"));
    }

    getFeedbacks(request, response) {
        response.json(FEEDBACKS);
    }

    remove(request, response) {
        const { id } = request.body

        const index = FEEDBACKS.findIndex(feedback => feedback.id === id);

        if (index !== -1) {
            FEEDBACKS.splice(index, 1); 
        }

        response.redirect('/feedbacks/lista');
    }
}

export { FeedbackController }