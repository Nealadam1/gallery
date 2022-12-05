console.log('Starting up');

$(oninit)

function oninit(){
    renderProjects()
    renderModals()

}

function renderProjects(){
    var projects=getProjects()
    var strHTML=projects.map(project => `
    <div data-project-id="${project.id}" class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="#${project.id}">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="${project.imgURL}-thumbnail.jpg" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${project.name}</h4>
      <p class="text-muted">${project.title}</p>
    </div>
  </div>
    `   
    )
    $('.projects-render').html(strHTML)
    
}

function renderModals(){
    var modals=getProjects()
    var strHTML=modals.map(modal=>`
    <div class="portfolio-modal modal fade" id="${modal.id}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">

                <h2>${modal.name}</h2>
                <p class="item-intro text-muted">${modal.title}</p>
                <img class="img-fluid d-block mx-auto" src="${modal.imgURL}-full.jpg" alt="">
                <p>${modal.desc}</p>
                <ul class="list-inline">
                  <li>Published:${modal.publishedAt}</li>
                  <li>Client: Personal project</li>
                  <li>Category: ${modal.labels}</li>
                </ul>
                <a href="${modal.url}" class="btn btn-success btn-lg d-block mx-auto mb-3" style="width:10em" role="button" aria-pressed="true">Open in Github</a>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `)
    $('body').append(strHTML)
}