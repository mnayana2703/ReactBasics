export function TransactionList({ data }) {
    return (
      <div className="table">
        <table border="1" cellpadding="5" cellspacing="5">
          <thead>
            <tr>
              <th>transactionType</th>
              <th>Mode</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {data.map(entry => (
  
  
              <tr>
                <td>{entry.transactionType}</td>
                <td>{entry.mode}</td>
                <td>{entry.amount}</td>
                <td>{entry.category}</td>
              </tr>
  
            )
            )}
          </tbody>
        </table>
      </div>
  
    )
  }