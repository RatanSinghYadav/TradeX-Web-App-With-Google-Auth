import React from 'react'

function Data() {
    data = [
        {
            "Meta Data": {
                "1. Information": "Daily Prices (open, high, low, close) and Volumes",
                "2. Symbol": "IBM",
                "3. Last Refreshed": "2023-05-26",
                "4. Output Size": "Compact",
                "5. Time Zone": "US/Eastern"
            },
            "Time Series (Daily)": {
                "2023-05-26": {
                    "1. open": "127.0600",
                    "2. high": "129.6600",
                    "3. low": "126.8100",
                    "4. close": "128.8900",
                    "5. volume": "5612570"
                },
                "2023-05-25": {
                    "1. open": "125.6100",
                    "2. high": "127.2300",
                    "3. low": "125.0100",
                    "4. close": "126.7600",
                    "5. volume": "4102854"
                }
            }
        }
    ]
    
    
  return (
    <div>Data</div>
  )
}

export default Data