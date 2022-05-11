(function(){
    const summary = document.querySelector('.summary-text');
    const cardsDiscussion = document.querySelectorAll('.cards-discussion');
    const answers = document.querySelector('.answers-container');
    const cardsBody = document.querySelectorAll('.cards-body'); 
    const cardsFooterParagraph = document.querySelectorAll('.cards-footer')[1].querySelectorAll('p');
    
    const summaryFullText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum. 
<br><br>
Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio. 
<br><br>
Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa. 
<br><br>
    Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    const summarySliceText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor,
mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis
quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel
aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut.
Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus.
Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus
condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque
sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum. Etiam aliquam dictum
    nisl, vel aliquet enim accumsan sit ametl accumsant... <b class="show-more">ver mais</b>`

    const commentFullText = `<p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo?</p><br>`
    const commentSliceText = `<p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>`

    let isExpandedSummary = false;
    let isExpandedAnswer = false;
    let isShown = false;

    function expandOrReduceSummary() {
        if (!isExpandedSummary) {
            summary.innerHTML = summarySliceText;
            isExpandedSummary = true;
        } else {
            summary.innerHTML = summaryFullText
            isExpandedSummary = false;
        }   
    }

    function expandOrReduceAnswer() {
        if (!isExpandedAnswer) {
            cardsBody[1].innerHTML = commentFullText;
            isExpandedAnswer = true;
        } else {
            cardsBody[1].innerHTML = commentSliceText
            isExpandedAnswer = false;
        }   
    }

    function showAnswers() {
        expandOrReduceAnswer()
        
        if (!isShown) {
            answers.style.display = 'block';
            isShown = true;
            cardsFooterParagraph[2].textContent = '4 likes';
            cardsFooterParagraph[3].textContent = '4 repostas';
        } else {
            answers.style.display = 'none';
            isShown = false;
            cardsFooterParagraph[2].textContent = '1 like';
            cardsFooterParagraph[3].textContent = '1 reposta';
        }
    }

    summary.addEventListener('click', expandOrReduceSummary);

    cardsDiscussion[1].addEventListener('click', showAnswers);

})()