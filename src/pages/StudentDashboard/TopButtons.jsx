import React from 'react'

export default function TopButtons() {
  return (
    <div className='container'>
      <div class="d-flex gap-2 justify-content-center py-5">
    <a>
    <button class="btn btn-primary rounded-pill px-3" type="button">You</button>
    </a>
    <a>
    <button class="btn btn-danger rounded-pill px-3" type="button">Result</button>
    </a>
    <a>
    <button class="btn btn-success rounded-pill px-3" type="button">Attandance</button>
    </a>
</div>
    </div>
  )
}