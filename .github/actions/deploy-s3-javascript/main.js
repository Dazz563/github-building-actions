import * as core from '@actions/core';
import * as github from '@actions/github';
import * as exec from '@actions/exec';

const run = () => {
	core.notice('Starting deployment to S3');
};

run();
