// cron-job.js
import cron from 'node-cron';
import axios from 'axios';
import cheerio from 'cheerio';
import prisma from '@/prisma/prisma'; // Adjust the path to your Prisma client

// Function to scrape price for a given URL
const scrapePrice = async (url: any) => {
  try {
    const result = await axios.get(url);
    const $ = cheerio.load(result.data);
    const price = $("span.-b.-ubpt.-tal.-fs24.-prxs").text().trim();
    return parseFloat(price.split(" ")[0].replace(/[^0-9.-]+/g, ""));
  } catch (error) {
    console.error(`Failed to fetch price for URL: ${url}`, error);
    return null;
  }
};

// Function to update prices in the database
const updatePrices = async () => {
  try {
    const products = await prisma.product.findMany();

    for (const product of products) {
      const price = await scrapePrice(product.url);
      if (price !== null) {
        await prisma.priceHistory.create({
          data: {
            product_id: product.product_id,
            price: price,
            timestamp: new Date()
          }
        });
        console.log(`Updated price for product ID: ${product.product_id}`);
      }
    }
  } catch (error) {
    console.error('Error updating prices:', error);
  }
};

// Schedule the job to run every 30 minutes
cron.schedule('*/30 * * * *', updatePrices);

console.log('Cron job started: Updating product prices every 30 minutes');
