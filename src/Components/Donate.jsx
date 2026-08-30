import { useState } from 'react'

// ─────────────────────────────────────────────────────────
// ⚠️ REPLACE THESE WITH THE FOUNDATION'S REAL BANK DETAILS
// ─────────────────────────────────────────────────────────
const accountName = 'Tshiamos 585 Grams of Hope Foundation'
const contactEmail = 'hello@tshiamos585.org'

const localBankDetails = [
  { label: 'Bank', value: '[Your Bank Name]' },
  { label: 'Account Name', value: accountName },
  { label: 'Account Number', value: '[0000000000]' },
  { label: 'Branch Code', value: '[000000]' },
  { label: 'Account Type', value: '[Cheque / Current]' },
]

const intlBankDetails = [
  { label: 'Bank', value: '[Your Bank Name]' },
  { label: 'Account Name', value: accountName },
  { label: 'Account Number / IBAN', value: '[Your Account Number or IBAN]' },
  { label: 'SWIFT / BIC Code', value: '[XXXXXXXX]' },
  { label: 'Bank Address', value: '[Branch Address, City, Country]' },
]
// ─────────────────────────────────────────────────────────

function generateReference() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i += 1) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return `858-${code}`
}

function loadReference() {
  if (typeof window === 'undefined') return generateReference()
  try {
    const existing = window.sessionStorage.getItem('tshiamos-donate-ref')
    if (existing) return existing
    const fresh = generateReference()
    window.sessionStorage.setItem('tshiamos-donate-ref', fresh)
    return fresh
  } catch {
    return generateReference()
  }
}

function copyToClipboard(value) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(value)
  }
  return Promise.reject(new Error('Clipboard API unavailable'))
}

function BankCard({ title, note, fields, copiedField, onCopy }) {
  return (
    <div className="bank-card">
      <h3>{title}</h3>
      {note && <p className="bank-card-note">{note}</p>}
      {fields.map((field) => (
        <div className="bank-field" key={field.label}>
          <div>
            <div className="bank-field-label">{field.label}</div>
            <div className="bank-field-value">{field.value}</div>
          </div>
          <button
            type="button"
            className={`copy-btn${copiedField === `${title}-${field.label}` ? ' copied' : ''}`}
            onClick={() => onCopy(`${title}-${field.label}`, field.value)}
          >
            {copiedField === `${title}-${field.label}` ? 'Copied!' : 'Copy'}
          </button>
        </div>
      ))}
    </div>
  )
}

function Donate() {
  const [reference] = useState(loadReference)
  const [copiedField, setCopiedField] = useState('')

  const handleCopy = (fieldKey, value) => {
    copyToClipboard(value)
      .then(() => {
        setCopiedField(fieldKey)
        setTimeout(() => setCopiedField(''), 1600)
      })
      .catch(() => {
        // Clipboard access can fail in some browsers/contexts — safe to ignore
      })
  }

  const mailtoHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
    `Donation Reference ${reference}`
  )}&body=${encodeURIComponent(
    `Hi Tshiamos 585 Grams of Hope Foundation,\n\nI've made an EFT donation using reference ${reference}.\n\nName:\nAmount:\nDate paid:\n\nThank you!`
  )}`

  return (
    <section className="section" id="donate">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Donate</div>
          <h2>Every gift helps a family feel less alone.</h2>
          <p className="lead">
            We don't yet have online card payments set up, so donations are
            made by direct bank transfer (EFT). Use the reference below so we
            can match your payment and say thank you.
          </p>
        </div>

        <div className="donate-ref-box">
          <div className="kicker" style={{ color: '#e7c9f7' }}>
            Your Donation Reference
          </div>
          <div className="donate-ref-code">{reference}</div>
          <div className="donate-ref-actions">
            <button
              type="button"
              className={`copy-btn${copiedField === 'reference' ? ' copied' : ''}`}
              onClick={() => handleCopy('reference', reference)}
            >
              {copiedField === 'reference' ? 'Copied!' : 'Copy Reference'}
            </button>
            <a className="btn btn-pink" href={mailtoHref}>
              Email Proof of Payment →
            </a>
          </div>
          <p className="donate-ref-note">
            Use this reference in your EFT payment description, then email us
            your proof of payment so we can confirm and acknowledge your
            donation.
          </p>
        </div>

        <div className="bank-grid">
          <BankCard
            title="South Africa — EFT"
            note="For local donors paying via internet banking."
            fields={localBankDetails}
            copiedField={copiedField}
            onCopy={handleCopy}
          />
          <BankCard
            title="International — Wire Transfer"
            note="Your bank may charge intermediary/correspondent fees for international transfers."
            fields={intlBankDetails}
            copiedField={copiedField}
            onCopy={handleCopy}
          />
        </div>
      </div>
    </section>
  )
}

export default Donate