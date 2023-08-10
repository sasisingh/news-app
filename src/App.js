import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [newsData, setNewsData] = useState([])

  const getNewsData = () => {
    fetch("https://saurav.tech/NewsAPI/everything/bbc-news.json", {
      method: "get"
    }).then((result) => {
      return result.json()
    }).then((resp) => {
      console.log(resp)
      setNewsData(resp.articles)
    }).catch((err) => {
      console.log("error ====>>", err)
    })
  }

  useEffect(() => {
    getNewsData()
  }, [])

  return (
    <>
      <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
          <a href="#" class="navbar-brand d-block d-lg-none" rel="noreferrer">
            <h1 class="m-0 display-4 text-uppercase text-primary">Biz<span class="text-white font-weight-normal">News</span></h1>
          </a>
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
            <div class="navbar-nav mr-auto py-0">
              <a href="#" class="nav-item nav-link" rel="noreferrer">Home</a>
            </div>
          </div>
        </nav>
      </div>
      <div class="container-fluid mt-5 pt-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="row">
                {
                  newsData.map((item) => {
                    return (

                      <div class="col-lg-6">
                        <div class="position-relative mb-3">
                          <img class="img-fluid w-100" src={item.urlToImage} style={{ "object-fit": "cover" }} alt='news' />
                          <div class="bg-white border border-top-0 p-4">
                            <div class="mb-2">
                              <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href={item.url} target='_blank' rel="noreferrer">{item?.source?.name}</a>
                              <a class="text-body" href={item.url} target='_blank'rel="noreferrer"><small>{item.publishedAt}</small></a>
                            </div>
                            <a class="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href={item.url} target='_blank' rel="noreferrer">{item.title}</a>
                            <p class="m-0">{item.description}</p>
                          </div>

                        </div>
                      </div>
                    )
                  })
                }

              </div>
            </div>
            <div class="col-lg-4">
              <div class="mb-3">
                <div class="section-title mb-0">
                  <h4 class="m-0 text-uppercase font-weight-bold">Tranding News</h4>
                </div>
                <div class="bg-white border border-top-0 p-3">
                  {
                    newsData.map((item) => {
                      return (
                        <div class="d-flex align-items-center bg-white mb-3" style={{ "height": "110px" }}>
                          <img class="img-fluid" src={item.urlToImage} alt="" height={"110px"} width={"110px"} />
                          <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                            <div class="mb-2">
                              <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href={item.url} target='_blank'>{item?.source?.name}</a>
                              <a class="text-body" href={item.url} target='_blank'rel="noreferrer"><small>{item.publishedAt}</small></a>
                            </div>
                            <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href={item.url} target='_blank' rel="noreferrer">{item.title}</a>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid py-4 px-sm-3 px-md-5" style={{ "background": "#111111" }}>
        <p class="m-0 text-center">&copy; <a href="#">Your Site Name</a>. All Rights Reserved.
        </p>
      </div>
    </>
  )
}

export default App