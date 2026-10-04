const pressMentions = [
    {
      publisher: 'TimesLIVE',
      title:
        'Prem baby born tiny with hole in heart survives to celebrate first birthday',
      url: 'https://www.timeslive.co.za/news/south-africa/2024-10-16-prem-baby-born-tiny-with-hole-in-heart-survives-to-celebrate-first-birthday/',
    },
    {
      publisher: 'Good Things Guy',
      title: "Tiny Fighter, Big Miracle: Tshiamo's Journey to Her First Birthday",
      url: 'https://www.goodthingsguy.com/tiny-fighter-big-miracle-tshiamos-journey-to-her-first-birthday/',
    },
    {
      publisher: 'Netcare',
      title:
        'Dynamite comes in small packages: Tiny Tshiamo celebrates her first birthday',
      url: 'https://www.netcare.co.za/News-Hub/Articles/dynamite-comes-in-small-packages-tiny-tshiamo-celebrates-her-first-birthday',
    },
    {
      publisher: 'SIMS Medical Bureau',
      title:
        'Dynamite comes in small packages: Tiny Tshiamo celebrates her first birthday',
      url: 'https://www.sims.co.za/dynamite-comes-in-small-packages-tiny-tshiamo-celebrates-her-first-birthday',
    },
  ]
  
  function PressMentions() {
    return (
      <section className="section section-alt" id="press">
        <div className="container">
          <div className="section-head">
            <div className="kicker">In the Media</div>
            <h2>Tshiamo's story, as told by others.</h2>
            <p className="lead">
              Tshiamo's journey has been featured by South African news outlets
              and healthcare organisations. Read the full stories below.
            </p>
          </div>
  
          <div className="tips-grid">
            {pressMentions.map((item) => (
              <div className="card" key={item.url}>
                <div className="memory-badge" style={{ marginBottom: '12px' }}>
                  {item.publisher}
                </div>
                <h3 style={{ fontSize: '18px' }}>{item.title}</h3>
                <a className="btn btn-light" href={item.url} target="_blank" rel="noopener noreferrer" style={{ marginTop: '14px', display: 'inline-block' }}>
                  Read Article →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default PressMentions
  