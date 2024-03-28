import { NextRequest, NextResponse } from "next/server";
import nodePandoc from "node-pandoc";

export async function POST(req: NextRequest) {
    const { markdownContent, latexContent } = await req.json(); // wait for json
  
    if (markdownContent) { // if the content exists, start conversion
      try {
        const latexOptions = {
          from: 'markdown',
          to: 'latex',
        };
  
        const latexResult = await new Promise<string>((resolve, reject) => { // wait or latex conversion, check for errors
          nodePandoc(markdownContent, latexOptions, (err: any, result: string | PromiseLike<string>) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });
  
        return NextResponse.json({ // return results
          latex: latexResult,
        });
      } catch (error) { // catch errors
        console.error('Error converting Markdown to LaTeX:', error);
        return NextResponse.json(
          { error: 'Failed to convert Markdown to LaTeX' },
          { status: 500 }
        );
      }
    } 
    
    if (latexContent) { // if the markdown is converted, convert to html
      try {
        const htmlOptions = {
          from: 'latex',
          to: 'html',
        };
  
        const htmlResult = await new Promise<string>((resolve, reject) => {
          nodePandoc(latexContent, htmlOptions, (err: any, result: string | PromiseLike<string>) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });
  
        return NextResponse.json({
          html: htmlResult,
        });
      } catch (error) {
        console.error('Error converting LaTeX to HTML:', error);
        return NextResponse.json(
          { error: 'Failed to convert LaTeX to HTML' },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        { error: 'Invalid request. Please provide either markdownContent or latexContent.' },
        { status: 400 }
      );
    }
  }