import * as core from '@actions/core';
import * as github from '@actions/github';
import * as exec from '@actions/exec';

const run = () => {
	// 1. Get some input values
	const bucket = core.getInput('bucket', {required: true});
	const bucketRegion = core.getInput('bucket-region', {required: true});
	const distFolder = core.getInput('dist-folder', {required: true});

	// 2. Upload files to S3
	const s3Uri = `s3://${bucket}`;
	exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

	const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
	core.setOutput('website-url', websiteUrl);
};

run();
