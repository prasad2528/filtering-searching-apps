import './index.css'

const TabItem = props => {
  const {tabDetails, selectedActiveTabid, isActive} = props
  const {displayText, tabId} = tabDetails
  const activeTabIdClassName = isActive ? 'active' : ''
  const onCLickTabId = () => {
    selectedActiveTabid(tabId)
  }
  return (
    <li className="tab-list">
      <button
        type="button"
        onClick={onCLickTabId}
        className={`button ${activeTabIdClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
