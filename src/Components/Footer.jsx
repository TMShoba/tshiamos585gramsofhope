function Footer() {
    const year = new Date().getFullYear()
   
    return (
      <footer>
        <div className="container">
          <div>© {year} Tshiamos 585 Grams of Hope Foundation.</div>
     {/*   <div>Every tiny life matters • Built with hope ♡</div>    */}
          <div className="footer-social">
            <span className="footer-social-text">Follow us:</span>
            <a
              className="social-link"
              href="https://www.facebook.com/share/1JNCVYMxZR/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              className="social-link instagram"
              href="https://www.instagram.com/tshia.mo585?igsi=cHl3MzViZGh0YTBv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              ◎
            </a>
            <a
              className="social-link x"
              href="https://x.com/tshiamos585grams"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              𝕏
            </a>
            <a
              className="social-link tiktok"
              href="https://www.tiktok.com/@tshiamos585grams"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              ♪
            </a>
           {/* <span>@tshiamos585grams</span> */}
          </div>
        {/*<div>Powered By Mosa And Thabo ♡</div> */}
        </div>
      </footer>
    )
  }
   
  export default Footer