import React from 'react'

export default class SecondSection extends React.Component {
  render() {
    return (
      <div className="SecondSection">
        <section className="SecondSectionParagraph">
          <h2 className="textHeader">New Opportunities</h2>
          <p className="textParagraph">We are the first and the only crowdfunding platform enabling you to help finance our farmers.</p>
        </section>
        <section className="bulletPointBox">
          <h3>Connect with our farmers</h3>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</p>
        </section>
        <section className="bulletPointBox">
          <h3>Grow your business</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </section>
        <section className="bulletPointBox">
          <h3>Social Impact Invesment</h3>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere</p>
        </section>
      </div>
    )
  }
};