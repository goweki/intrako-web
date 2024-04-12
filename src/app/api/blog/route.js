import clientPromise from "@/lib/mongodb";
export const revalidate = 3600; // false | 'force-cache' | 0 | number

export async function GET(req) {
  //   const url = new URL(req.url);
  //   const collection_ = url.searchParams.get("colle");
  try {
    console.log(`........................\nGET REQUEST /api/blog`);
    // target DB
    const clientResolved = await clientPromise;
    const db = clientResolved.db("intrako");
    // target COLLECTION
    const collection = db.collection("blogposts");
    // FIND Docs
    const data_ = await collection.find({}).toArray();
    return Response.json({ success: data_ });
  } catch (error) {
    // handle ERROR if caught
    console.log(` > Error caught at api/data - GET \n >> ${error}\n`);
    return Response.json({
      error: "Could not fetch data",
    });
  }
}
