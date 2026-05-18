const containerFeedbacks = document.getElementById("feedbacks-container");

async function exibirFeedbacks() {
    try {
        const response = await fetch("/feedbacks/dados")

        const FEEDBACKS = await response.json();

        containerFeedbacks.innerHTML = "";

        if(FEEDBACKS.length === 0) {
           containerFeedbacks.innerHTML = `<p class="no-feedback">Nenhum feedback enviado até o momento.</p>`
           return
        }

        containerFeedbacks.innerHTML = FEEDBACKS.map((feedback) => `
            <div class="feedback-card">
                <strong>${feedback.name}</strong>
                <p>"${feedback.feedback}"</p>
                
                <form action="/feedbacks/remover" method="POST">
                    <input type="hidden" name="id" value="${feedback.id}">
                    <button type="submit" class="btn-remove">Remover</button>
                </form>
            </div>`
        ).join('')

    } catch (error) {
        document.getElementById('feedbacks-container').innerHTML = '<p class="error-msg">Erro ao carregar os feedbacks do servidor.</p>';
    }
}

window.addEventListener("DOMContentLoaded", exibirFeedbacks);