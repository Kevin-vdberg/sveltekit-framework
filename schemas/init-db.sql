DROP TABLE IF EXISTS [clients];
CREATE TABLE IF NOT EXISTS [clients] (
    "id" INTEGER PRIMARY KEY autoincrement,
    "email" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "companyName" TEXT,
    "websiteUrl" TEXT,
    "phoneNumber" TEXT,
    "createdAt" TEXT DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TEXT DEFAULT CURRENT_TIMESTAMP
    );

DROP TABLE IF EXISTS [client_tracking_info];
CREATE TABLE IF NOT EXISTS [client_tracking_info] (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "client_id" INTEGER NOT NULL,
    "gclid" TEXT, -- Google Click Identifier for offline conversions
    "utm_source" TEXT, -- Campaign source
    "utm_medium" TEXT, -- Campaign medium
    "utm_campaign" TEXT, -- Campaign name
    "utm_term" TEXT, -- Campaign term
    "utm_content" TEXT, -- Campaign content
    "ga_client_id" TEXT, -- Google Analytics Client ID
    "conversion_id" TEXT, -- Google Ads Conversion ID
    "conversion_label" TEXT, -- Google Ads Conversion Label
    "conversion_value" REAL, -- Conversion value
    "conversion_currency" TEXT DEFAULT 'EUR',
    "conversion_timestamp" TEXT, -- When the conversion occurred
    "enhanced_conversion_data" TEXT, -- JSON blob for enhanced conversions
    "is_conversion_processed" INTEGER DEFAULT 0, -- 0 = false, 1 = true
    "processed_at" TEXT, -- When conversion was sent to Google
    "createdAt" TEXT DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_client_email ON clients(email);
CREATE INDEX IF NOT EXISTS idx_tracking_gclid ON client_tracking_info(gclid);
CREATE INDEX IF NOT EXISTS idx_tracking_client_id ON client_tracking_info(client_id);
CREATE INDEX IF NOT EXISTS idx_tracking_conversion_processed ON client_tracking_info(is_conversion_processed)
